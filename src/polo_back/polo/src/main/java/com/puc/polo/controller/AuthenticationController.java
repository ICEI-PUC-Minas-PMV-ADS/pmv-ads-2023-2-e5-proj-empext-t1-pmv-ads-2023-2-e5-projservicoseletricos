package com.puc.polo.controller;

import com.puc.polo.infra.security.TokenService;
import com.puc.polo.model.Dto.AuthenticationDTO;
import com.puc.polo.model.Dto.LoginResponseDTO;
import com.puc.polo.model.Dto.RegisterDTO;
import com.puc.polo.model.User;
import com.puc.polo.repositories.UserRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("auth")
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TokenService tokenService;

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody @Valid AuthenticationDTO data){
        var userNamePassword = new UsernamePasswordAuthenticationToken(data.email(), data.senha());
        try{
            var auth = this.authenticationManager.authenticate(userNamePassword);

            if (auth.isAuthenticated()){
                Collection<? extends GrantedAuthority> authorities = auth.getAuthorities();
                User usuario = (User)auth.getPrincipal();
                Integer id = usuario.getId_user();

                List<String> roles =authorities.stream().map(GrantedAuthority::getAuthority).toList();
                var token = tokenService.generateToken((User)auth.getPrincipal());
                return ResponseEntity.ok(new LoginResponseDTO(token, roles, id));
            } else {
                throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Usuário ou senha inválidos");
            }
        } catch (Exception e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Login ou senha inválidos");
        }
    }

    @PostMapping("/register")
    public ResponseEntity register (@RequestBody @Valid RegisterDTO data){
        if (this.userRepository.findByEmail(data.email()) != null){
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Usuário " + data.email() + " indisponível.");
        }
        String encryptedPassword = new BCryptPasswordEncoder().encode(data.senha());
        User user = new User(data.nome(), data.sobrenome(), data.email(), encryptedPassword, data.cep(),
                            data.logradouro(), data.bairro(), data.numero(), data.complemento(), data.empresa(), "USER");

        this.userRepository.save(user);

        return ResponseEntity.ok().build();
    }
}
