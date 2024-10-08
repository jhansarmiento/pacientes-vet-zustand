
type PatientDetailItemProps = {
    label: string
    data: string
}

export default function PatientDetailItem({label, data} : PatientDetailItemProps) {
  return (
    <p className="uppercase font-bold mb-3 text-gray-700">
      {label}: {""}
      <span className="font-normal normal-case">{data}</span>
    </p>
  );
}
