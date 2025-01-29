export default function Home() {

  return (
    <div className="w-[97] h-[97] bg-black">
      <header className="w-[2512] min-h-screen bg-blue-950 bg-[url(../public/homeTopImage.jpg)] bg-cover bg-center"></header>
      <main className="flex flex-col items-center w-full bg-[url(../public/tormentaEye-horizontal.jpg)] bg-repeat-x bg-top">
          <section title="Cards" className="min-h-[89vh]"></section>
          <section title="Slide Deuses" className="min-h-[75vh] min-w-[1040px] bg-yellow-900">Slide Deuses</section>
          <section title="Slide Ameaças" className="min-h-[75vh] min-w-[1040px] bg-lime-950">Slide Ameaças</section>
      </main>
    </div>
  );
}
