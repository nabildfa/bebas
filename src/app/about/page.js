import React from "react";

function Page() {
  let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let produk = [
    { nama: "produk 1", harga: "10000" },
    { nama: "produk 2", harga: "15000" },
  ];
  // for (let i = 0; i <= 10; i++) console.log(number[i]);

  return (
    <div className="bg-red-500 flex justify-between">
      <div> kiri </div>
      <div class="flex justify-between gap-4">
        <div> Home </div>
        <div> About </div>
        <div> Promotions </div>
        <div> Blogs </div>
        <div> Contact Us </div>
      </div>
      <div> kanan </div>
    </div>
  );
}

export default Page;
