import React from "react";
import { useForm } from "react-hook-form";
import { Validator } from "../Validators/Validator";

export const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const incluirTelefono = watch("incluirTelefono");

  return (
    <div>
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            {...register("nombre", { required: true, maxLength: 15 })}
          />
          {errors.nombre?.type === "required" && (
            <p>El campo nombre es requerido</p>
          )}
        </div>
        <div>
          <label>Direccion:</label>
          <input type="text" {...register("direccion", { required: true })} />
        </div>
        <div>
          <label>Edad:</label>
          <input type="text" {...register("edad", { validate: Validator })} />
        </div>
        {errors.edad && <p>La edad debe estar entre 18 y 65</p>}
        <div>
          <label>Pais</label>
          <select {...register("pais")}>
            <option value="col">Colombia</option>
            <option value="arg">Argentina</option>
            <option value="bra">Brasil</option>
          </select>
        </div>
        <div>
          <label>Incluir telefono ?</label>
          <input type="checkbox" {...register("incluirTelefono")} />
        </div>
        {incluirTelefono && (
          <div>
            <label>Telefono</label>
            <input type="text" {...register("telefono")} />
          </div>
        )}
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};
