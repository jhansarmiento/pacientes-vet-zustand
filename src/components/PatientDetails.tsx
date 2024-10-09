import { Patient } from "../types";
import PatientDetailItem from "./PatientDetailItem";
import { usePatientStore } from "../store/store";
import { toast } from "react-toastify";

type PatientDetailsProps = {
  patient: Patient;
};

export default function PatientDetails({ patient }: PatientDetailsProps) {

    const { deletePatient, getPatientById } =usePatientStore()

    const handleClick = () => {
        deletePatient(patient.id)
        toast.error("Paciente Eliminado", {
            autoClose: 3000
        })
    }

  return (
    <div className="mx-5 my-10 px-5 py-10 shadow-lg rounded-lg bg-white">
      <PatientDetailItem label="ID" data={patient.id} />
      <PatientDetailItem label="Name" data={patient.name} />
      <PatientDetailItem label="Propietario" data={patient.caretaker} />
      <PatientDetailItem label="Email" data={patient.email} />
      <PatientDetailItem label="Fecha" data={patient.date.toString()} />
      <PatientDetailItem label="Síntomas" data={patient.symptons} />

      <div className="flex flex-col lg:flex-row justify-end gap-5 mt-10">
        <button
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          type="button"
          onClick={() => getPatientById(patient.id)}
        >
          Editar
        </button>
        <button
          className="py-2 px-10 bg-red-400 hover:bg-red-600 text-white font-bold uppercase rounded-lg"
          type="button"
          onClick={handleClick}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
