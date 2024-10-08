

export default function Error({ children }: { children: React.ReactNode }) {
  return <p className="text-center my-4 bg-red-400 text-white font-bold p-2 text-sm uppercase rounded-lg">{children}</p>;
}
