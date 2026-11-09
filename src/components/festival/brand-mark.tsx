import Image from "next/image";

export function BrandMark({
  variant,
}: {
  variant: "province" | "school";
}) {
  const isSchool = variant === "school";

  return (
    <span
      aria-label={
        isSchool ? "Logo SMAN 2 Kota Lubuklinggau" : "Logo Provinsi Sumatera Selatan"
      }
      className="brand-mark"
      role="img"
    >
      <span className="brand-mark__seal">
        <Image
          alt={isSchool ? "Lambang SMAN 2 Kota Lubuklinggau" : "Lambang Provinsi Sumatera Selatan"}
          aria-hidden="true"
          className="brand-mark__image"
          fill
          priority
          sizes="(max-width: 380px) 2.5rem, (max-width: 767px) 3rem, 4.25rem"
          src={isSchool ? "/images/logo-sman-2.png" : "/images/logo-sumatera-selatan.png"}
        />
      </span>
    </span>
  );
}
