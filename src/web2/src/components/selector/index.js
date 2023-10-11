import { CardSubcategorys, ModalCategoryCard, TitleCategoryCard,} from "./styles";
import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";

export default function Selector(props) {
  const [openSubcategorys, setOpenSubcategorys] = useState({
    open: false,
    item: null,
  });

  function openSubCategories() {
    if (props.openSubcategories) {
      props.setShowProducts(true);
    }
  }

  return (
    <CardSubcategorys onClick={openSubCategories}>
      <TitleCategoryCard
        onClick={() => {
          if (props.setActualCategory) {
            props.setActualCategory(props.id);
          }

          if (props.formik) {
            props.formik.setFieldValue("id", props.category.id);
          }

          setOpenSubcategorys({
            open: !openSubcategorys.open,
            item: props.category.id,
          });
        }}
      >
        <h2>{props.category && props.category.nome}</h2>
        {!props.subCategorys && <MdKeyboardArrowRight className="icon" />}
        {props.subCategorys && (
          <>
            {openSubcategorys.open &&
            openSubcategorys.item === props.category.id ? (
              <MdKeyboardArrowDown className="icon" />
            ) : (
              <MdKeyboardArrowRight className="icon" />
            )}
          </>
        )}
      </TitleCategoryCard>
      {props.subCategorys && (
        <ModalCategoryCard
          display={
            openSubcategorys.open && openSubcategorys.item === props.category.id
          }
        >
          {props.subCategorys.map((item, index) => {
            return (
              <>
                {item.categoriaId === props.category.id && (
                  <h3
                    key={index}
                    onClick={() => {
                      props.setActualSubCategory(index);
                      props.setShowProducts(true);
                    }}
                  >
                    {item.nome}
                  </h3>
                )}
              </>
            );
          })}
        </ModalCategoryCard>
      )}
    </CardSubcategorys>
  );
}
