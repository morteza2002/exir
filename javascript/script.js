document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', function() {
    var logoItem = document.querySelector('.logo-item');
    
    // بررسی اسکرول به پایین
    if (window.scrollY > 0) {
      logoItem.classList.add('show'); // افزودن کلاس show برای نمایش آیتم
    } else {
      logoItem.classList.remove('show'); // حذف کلاس show برای پنهان کردن آیتم
    }
  });
});





function scrollToHeading() {
    const target = document.getElementById('target-heading');
    target.scrollIntoView({ behavior: 'smooth' });
  }
  document.getElementById("loadMore").addEventListener("click", function() {
    // نمایش ردیف‌های پنهان
    document.querySelectorAll("tr.more-rows").forEach(row => {
        row.classList.remove("d-none");
    });

    // مخفی کردن دکمه
    this.style.display = "none";
});

document.getElementById("play-button").addEventListener("click", function() {
  document.getElementById("video-cover").classList.add("d-none");
  document.getElementById("play-button").classList.add("d-none");
  const video = document.getElementById("video-element");
  video.classList.remove("d-none");
  video.play();
});


document.addEventListener("DOMContentLoaded", function() {
  // دکمه را انتخاب کنید
  const toggleButton = document.getElementById('toggle-button');

  // آیتم‌هایی که کلاس "item" و "hidden" دارند را انتخاب کنید
  const hiddenItems = document.querySelectorAll('.item');

  // رویداد کلیک برای دکمه
  toggleButton.addEventListener('click', function() {
    let isHidden = hiddenItems[0].classList.contains('hidden');
    
    hiddenItems.forEach(function(item) {
      if (isHidden) {
        item.classList.remove('hidden'); // کلاس "hidden" را حذف کنید
      } else {
        item.classList.add('hidden'); // کلاس "hidden" را اضافه کنید
      }
    });

    // تغییر متن دکمه بر اساس وضعیت جدید
    if (isHidden) {
      toggleButton.textContent = 'پنهان کردن';
    } else {
      toggleButton.textContent = 'نمایش';
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 2, // Default for larger screens
    slidesPerGroup: 1,
    loop: false,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
      stopOnLastSlide: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});


// document.addEventListener("DOMContentLoaded", function () {
//   var dropdownButton1 = document.getElementById("dropdownMenuButton1");
//   var dropdownMenu1 = document.getElementById("dropdownMenu1");

//   var dropdownButton2 = document.getElementById("dropdownMenuButton2");
//   var dropdownMenu2 = document.getElementById("dropdownMenu2");

//   dropdownButton1.addEventListener("click", function () {
//     toggleDropdown(dropdownMenu1);
//   });

//   dropdownButton2.addEventListener("click", function () {
//     toggleDropdown(dropdownMenu2);
//   });

//   function toggleDropdown(menu) {
//     if (menu.classList.contains("show")) {
//       menu.classList.remove("show");
//     } else {
//       menu.classList.add("show");
//     }
//   }
// });


function toggleContent() {
  var extraContent = document.getElementById("extraContent");
  var showMoreBtn = document.getElementById("showMoreBtn");

  if (extraContent.style.display === "none") {
    extraContent.style.display = "block";
    showMoreBtn.textContent = " بستن";
  } else {
    extraContent.style.display = "none";
    showMoreBtn.textContent = "نمایش بیشتر";
  }
}



