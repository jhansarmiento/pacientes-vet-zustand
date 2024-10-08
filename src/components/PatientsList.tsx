import { usePatientStore } from "../store/store";
import PatientDetails from "./PatientDetails";

export default function PatientsList() {
  const patients = usePatientStore((state) => state.patients);

  return (
    <div className="md:w-1/2 lg:w-3/5 mx-5 md:h-screen overflow-y-scroll">
      {patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Listado De Pacientes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            {" "}
            Administra Tus {""}
            <span className="text-indigo-600 font-bold">Pacientes Y Citas</span>
          </p>
          {patients.map( patient => (
            <PatientDetails 
              key={patient.id}
              patient={patient}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No Hay Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            {" "}
            Comienza Agregando Pacientes {""}
            <span className="text-indigo-600 font-bold">
              Y Aparecerán En Este Lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
}
