package com.puc.polo.model.Dto;

import java.util.List;

public record LoginResponseDTO(String token, List<String> roles, Integer id) {
}
