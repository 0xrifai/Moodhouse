---
title: "Jasa Sablon"
Description: "Jasa Sablon Moodhouse Print Studio"
layout: "page"
---

{{< rawhtml >}}

<style>
    .actives {
  cursor: pointer;
  background-color: #1e293b;
}

.actives :is(h2, p) {
  position: relative;
  z-index: 2;
}
.actives :is(span, p) {
  color: #f3f4f6;
}

.circle {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: 0.5s;
  z-index: 0;
  top: 0;
  right: 0;
}

.grid-offer :is(p, button) {
  opacity: 0;
}

.actives :is(p, button) {
  opacity: 1;
  transition: 0.5s 0.1s ease-in-out;
}

.grid-offer .actives:nth-child(1) .circle {
  background: url("/img/tshirt.webp")
    no-repeat 50% 50% / cover;
}
.grid-offer .actives:nth-child(2) .circle {
  background: url("/img/slevee.webp")
    no-repeat 50% 50% / cover;
}
.grid-offer .actives:nth-child(3) .circle {
  background: url("/img/hoodie.webp")
    no-repeat 50% 50% / cover;
}
.grid-offer .actives:nth-child(4) .circle {
  background: url("/img/sweater.webp")
    no-repeat 50% 50% / cover;
}
.actives .circle {
  clip-path: circle(110px at 100% 0%);
}
.actives:hover .circle {
  clip-path: circle(200px at 100% 0%);
}

@media screen and (min-width: 1200px) {
  .actives {
    transform: scale(1.1);
    transition: 0.5s ease-in-out;
  }
}

.modal {
  display: none;
  z-index: 9999;
}
.open {
  display: block;
}
.cstm {
  position: fixed;
  bottom: 0;
  width: 100%;
}

</style>
<div class="w-full mx-auto lg:px-16 px-4 py-8 flex flex-col justify-center">
   <div class="grid-offer text-left grid grid-cols-1 md:grid-cols-4 gap-5 w-full">
      <div class="bg-slate-800 p-8 rounded-md relative actives">
         <div class="circle rounded-md"></div>
         <span class="text-gray-400 text-md">01</span>
         <h2 class="text-white mt-3 mb-5 text-2xl lg:text-3xl"> Sablon <br> Tshirt </h2>
         <button data-target="simpleModal_1" data-toggle="modal" class="inline-flex items-center uppercase text-white">lihat detail <svg class="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
         </button>
      </div>
      <div class="bg-slate-800 p-8 rounded-md relative">
         <div class="circle rounded-md"></div>
         <span class="text-gray-400 text-2xl">02</span>
         <h2 class="text-white mt-3 mb-5 text-2xl lg:text-3xl">Sablon <br /> Sleeve </h2>
         <button data-target="simpleModal_2" data-toggle="modal" class="inline-flex items-center uppercase text-white">lihat detail <svg class="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
         </button>
      </div>
      <div class="bg-slate-800 p-8 rounded-md relative">
         <div class="circle rounded-md"></div>
         <span class="text-gray-100 text-2xl">03</span>
         <h2 class="text-white mt-3 mb-5 text-2xl lg:text-3xl">Sablon <br /> Hoodie </h2>
         <button data-target="simpleModal_3" data-toggle="modal" class="inline-flex items-center uppercase text-white">lihat detail <svg class="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
         </button>
      </div>
      <div class="bg-slate-800 p-8 rounded-md relative">
         <div class="circle rounded-md"></div>
         <span class="text-gray-400 text-2xl">04</span>
         <h2 class="text-white mt-3 mb-5 text-2xl lg:text-3xl">Sablon <br /> Sweater </h2>
         <button data-target="simpleModal_4" data-toggle="modal" class="inline-flex items-center uppercase text-white">lihat detail <svg class="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
         </button>
      </div>
   </div>
</div>

<!-- start popup -->
<div id="simpleModal_1" class="modal">
    <div class="fixed z-50 overflow-y-auto top-0 w-full left-0">
        <div class="flex items-center justify-center min-height-100vh pb-20 text-center sm:block sm:p-0">
            <div class="fixed inset-0 transition-opacity">
                <div class="absolute inset-0 bg-slate-900 opacity-75"></div>
            </div>
            <span class="sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
            <div class="h-screen inline-block align-center bg-slate-700 text-left text-sm text-gray-300 overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                <div class="bg-slate-700 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <h1 class="text-2xl font-bold mb-2 text-white">T-shirt</h1>
                    <div class="text-base">
                        <p>Bahan Combed 30s</p>
                        <p class="mb-3">
                            Kaos Cotton 30s adalah kaos yang terbuat dari bahan katun (serat rapat) dengan ketebalan benang 30s (gramasi antara 140 – 160 gr/m2), 
                            serat kain halus karena terbuat dari serat kapas maka kaos Cotton 20s menyerap keringat sehingga nyaman dan tidak panas saat dipakai.
                        </p>
                        <ul class="my-2">
                            <li>Kaos pendek 30s</li>
                            <li># 1-2 warna</li>
                            <li>65.000</li>
                            <li># 3-5 warna</li>
                            <li>70.000</li>
                            <li># lebih dari 5 warna</li>
                            <li>75.000</li>
                        </ul>
                        <ul class="list-none my-2 hover:list-disc text-white">
                            <li>Kaos panjang +5000</li>
                            <li>Rib / karet tangan +2000</li>
                            <li>Tambah Logo Tangan +5000 ( kiri kanan)</li>
                            <li>Bahan 24s +5000</li>
                        </ul>
                        <ul class="list-none hover:list-dis pl-5 py-4 bg-slate-500 rounded-md">
                            <li>// minimal pemesanan 12 pcs</li>
                            <li>// harga nego minimal 4 lusin</li>
                        </ul>
                    </div>
                </div>
                <div class="bg-slate-200 px-4 py-3 text-right cstm">
                <button type="button" class="py-2 px-4 bg-slate-500 text-white rounded hover:bg-slate-700 mr-2 text-base" data-dismiss="modal">Tutup</button>
                <button type="button" class="py-2 px-4 bg-yellow-500 text-white rounded hover:bg-yellow-700 mr-2 text-base"></i>Buat Sekarang</button>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="simpleModal_2" class="modal">
    <div class="fixed z-50 overflow-y-auto top-0 w-full left-0">
        <div class="flex items-center justify-center min-height-100vh pb-20 text-center sm:block sm:p-0">
            <div class="fixed inset-0 transition-opacity">
                <div class="absolute inset-0 bg-slate-900 opacity-75"></div>
            </div>
            <span class="sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
            <div class="h-screen inline-block align-center bg-slate-700 text-left text-sm text-gray-300 overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                <div class="bg-slate-700 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <h1 class="text-2xl font-bold mb-2 text-white">Sleeve</h1>
                    <div class="text-base">
                        <p>Bahan Cotton Fleece</p>
                        <p class="mb-3">
                            Bahan jenis ini adalah bahan full cotton, tidak ada campuran dengan media lainnya. 
                            bahan jenis ini adalah bahan yang paling sering digunakan untuk sablon hoodie. 
                            Sisi luar bahan cotton fleece sama seperti bahan cotton combed ( bahan kaos ), 
                            permukaannya rata, lembut dan mempunyai permukaan dalam yang berbulu halus. 
                            Sebagian besar hoodie yang beredar di pasaran adalah hoodie yang menggunakan bahan ini. 
                            Karena bahan ini adalah bahan yang paling lazim untuk di jadikan hoodie dengan kualitas
                            terbaik di kelasnya. Jenis bahan ini mempunyai permukaan yang halus, 
                            lembut dan nyaman ketika di pakai.
                        </p>
                        <ul class="list-none hover:list-dis pl-5 py-4 bg-slate-500 rounded-md">
                            <li>// minimal pemesanan 12 pcs</li>
                            <li>// harga nego minimal 4 lusin</li>
                        </ul>
                    </div>
                </div>
                <div class="bg-slate-200 px-4 py-3 text-right cstm">
                <button type="button" class="py-2 px-4 bg-slate-500 text-white rounded hover:bg-slate-700 mr-2 text-base" data-dismiss="modal">Tutup</button>
                <button type="button" class="py-2 px-4 bg-yellow-500 text-white rounded hover:bg-yellow-700 mr-2 text-base"></i>Buat Sekarang</button>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="simpleModal_3" class="modal">
    <div class="fixed z-50 overflow-y-auto top-0 w-full left-0">
        <div class="flex items-center justify-center min-height-100vh pb-20 text-center sm:block sm:p-0">
            <div class="fixed inset-0 transition-opacity">
                <div class="absolute inset-0 bg-slate-900 opacity-75"></div>
            </div>
            <span class="sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
            <div class="h-screen inline-block align-center bg-slate-700 text-left text-sm text-gray-300 overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                <div class="bg-slate-700 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <h1 class="text-2xl font-bold mb-2 text-white">Hoodie</h1>
                    <div class="text-base">
                        <p>Bahan Cotton Fleece</p>
                        <p class="mb-3">
                            Bahan jenis ini adalah bahan full cotton, tidak ada campuran dengan media lainnya. 
                            bahan jenis ini adalah bahan yang paling sering digunakan untuk sablon hoodie. 
                            Sisi luar bahan cotton fleece sama seperti bahan cotton combed ( bahan kaos ), 
                            permukaannya rata, lembut dan mempunyai permukaan dalam yang berbulu halus. 
                            Sebagian besar hoodie yang beredar di pasaran adalah hoodie yang menggunakan bahan ini. 
                            Karena bahan ini adalah bahan yang paling lazim untuk di jadikan hoodie dengan kualitas
                            terbaik di kelasnya. Jenis bahan ini mempunyai permukaan yang halus, 
                            lembut dan nyaman ketika di pakai.
                        </p>
                        <ul class="list-none hover:list-dis pl-5 py-4 bg-slate-500 rounded-md">
                            <li>// minimal pemesanan 12 pcs</li>
                            <li>// harga nego minimal 4 lusin</li>
                        </ul>
                    </div>
                </div>
                <div class="bg-slate-200 px-4 py-3 text-right cstm">
                <button type="button" class="py-2 px-4 bg-slate-500 text-white rounded hover:bg-slate-700 mr-2 text-base" data-dismiss="modal">Tutup</button>
                <button type="button" class="py-2 px-4 bg-yellow-500 text-white rounded hover:bg-yellow-700 mr-2 text-base"></i>Buat Sekarang</button>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="simpleModal_4" class="modal">
    <div class="fixed z-50 overflow-y-auto top-0 w-full left-0">
        <div class="flex items-center justify-center min-height-100vh pb-20 text-center sm:block sm:p-0">
            <div class="fixed inset-0 transition-opacity">
                <div class="absolute inset-0 bg-slate-900 opacity-75"></div>
            </div>
            <span class="sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
            <div class="h-screen inline-block align-center bg-slate-700 text-left text-sm text-gray-300 overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                <div class="bg-slate-700 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <h1 class="text-2xl font-bold mb-2 text-white">Sweater</h1>
                    <div class="text-base">
                        <p>Bahan Cotton Fleece</p>
                        <p class="mb-3">
                            Bahan jenis ini adalah bahan full cotton, tidak ada campuran dengan media lainnya. 
                            bahan jenis ini adalah bahan yang paling sering digunakan untuk sablon hoodie. 
                            Sisi luar bahan cotton fleece sama seperti bahan cotton combed ( bahan kaos ), 
                            permukaannya rata, lembut dan mempunyai permukaan dalam yang berbulu halus. 
                            Sebagian besar hoodie yang beredar di pasaran adalah hoodie yang menggunakan bahan ini. 
                            Karena bahan ini adalah bahan yang paling lazim untuk di jadikan hoodie dengan kualitas
                            terbaik di kelasnya. Jenis bahan ini mempunyai permukaan yang halus, 
                            lembut dan nyaman ketika di pakai.
                        </p>
                        <ul class="list-none hover:list-dis pl-5 py-4 bg-slate-500 rounded-md">
                            <li>// minimal pemesanan 12 pcs</li>
                            <li>// harga nego minimal 4 lusin</li>
                        </ul>
                    </div>
                </div>
                <div class="bg-slate-200 px-4 py-3 text-right cstm">
                <button type="button" class="py-2 px-4 bg-slate-500 text-white rounded hover:bg-slate-700 mr-2 text-base" data-dismiss="modal">Tutup</button>
                <button type="button" class="py-2 px-4 bg-yellow-500 text-white rounded hover:bg-yellow-700 mr-2 text-base"></i>Buat Sekarang</button>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
const grid = document.querySelectorAll(".grid-offer div");
grid.forEach((item) => {
  item.addEventListener("mouseover", () => {
    grid.forEach((el) => el.classList.remove("actives"));
    item.classList.add("actives");
  });
});
</script>

<script>
  // popup
  document.addEventListener('click', function (e) {
    e = e || window.event;
    var target = e.target || e.srcElement;

    if (target.hasAttribute('data-toggle') && target.getAttribute('data-toggle') == 'modal') {
        if (target.hasAttribute('data-target')) {
            var m_ID = target.getAttribute('data-target');
            document.getElementById(m_ID).classList.add('open');
            e.preventDefault();
        }
    }

    // Close modal window with 'data-dismiss' attribute or when the backdrop is clicked
    if ((target.hasAttribute('data-dismiss') && target.getAttribute('data-dismiss') == 'modal') || target.classList.contains('modal')) {
        var modal = document.querySelector('[class="modal open"]');
        modal.classList.remove('open');
        e.preventDefault();
    }
  }, false);
</script>

{{< /rawhtml >}}