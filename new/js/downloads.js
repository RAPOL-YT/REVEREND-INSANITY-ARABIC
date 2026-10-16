
/* =========================================================
   GHOST NOVEL
   الملف: js/downloads.js

   مسؤول عن:
   1. فتح وإغلاق أقسام التنزيلات
   2. تغيير علامة + إلى -
   3. تجهيز أزرار المفضلة
   4. تجهيز الصفحة للربط مع Supabase لاحقاً
   ========================================================= */


/* =========================================================
   1. فتح وإغلاق أقسام التنزيلات
   ========================================================= */

const categoryButtons = document.querySelectorAll(
    "[data-category-toggle]"
);


categoryButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        /*
         * نصل إلى القسم الأب.
         *
         * شكل HTML:
         *
         * .download-category
         *     ├── button
         *     └── .download-items
         */

        const category = button.closest(
            ".download-category"
        );


        /*
         * نبحث عن قائمة التنزيلات داخل القسم
         */

        const items = category.querySelector(
            ".download-items"
        );


        /*
         * نبحث عن أيقونة +
         */

        const icon = button.querySelector(
            ".category-icon"
        );


        /*
         * هل القسم مفتوح؟
         */

        const isOpen =
            category.classList.contains("open");


        /*
         * إذا كان مفتوحاً:
         * أغلقه
         */

        if (isOpen) {

            category.classList.remove("open");

            items.style.maxHeight = "0px";

            icon.textContent = "+";

        }


        /*
         * إذا كان مغلقاً:
         * افتحه
         */

        else {

            category.classList.add("open");

            items.style.maxHeight =
                items.scrollHeight + "px";

            icon.textContent = "−";

        }

    });

});


/* =========================================================
   2. تحديث ارتفاع القسم عند تغيير حجم الشاشة
   ========================================================= */

window.addEventListener("resize", function () {

    const openCategories =
        document.querySelectorAll(
            ".download-category.open"
        );


    openCategories.forEach(function (category) {

        const items =
            category.querySelector(
                ".download-items"
            );


        if (items) {

            items.style.maxHeight =
                items.scrollHeight + "px";

        }

    });

});


/* =========================================================
   3. أزرار المفضلة
   ========================================================= */

/*
 * في هذه المرحلة لا نقوم بالحفظ في قاعدة البيانات بعد.
 *
 * سنربطها مع Supabase بعد إنشاء:
 *
 * - حساب المستخدم
 * - تسجيل الدخول
 * - جدول favorites
 *
 * لكننا نجهز الواجهة من الآن.
 */


const favoriteButtons = document.querySelectorAll(
    "[data-favorite-button]"
);


favoriteButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        /*
         * نصل إلى بطاقة التنزيل
         */

        const card = button.closest(
            ".download-card"
        );


        if (!card) {
            return;
        }


        /*
         * الحصول على ID التنزيل
         */

        const downloadId =
            card.dataset.downloadId;


        /*
         * في الوقت الحالي نعرض رسالة مؤقتة.
         *
         * لاحقاً ستصبح:
         *
         * Supabase → favorites
         */

        console.log(
            "Favorite requested:",
            downloadId
        );


        /*
         * تغيير حالة الزر مؤقتاً
         */

        const isFavorite =
            button.classList.contains(
                "is-favorite"
            );


        if (isFavorite) {

            button.classList.remove(
                "is-favorite"
            );

            button.textContent =
                "♡ إضافة للمفضلة";

        }

        else {

            button.classList.add(
                "is-favorite"
            );

            button.textContent =
                "♥ تمت الإضافة للمفضلة";

        }

    });

});


/* =========================================================
   4. منع الروابط التجريبية من التسبب في مشكلة
   ========================================================= */

/*
 * حالياً لدينا روابط مثل:
 *
 * https://example.com/download-1
 *
 * وهي روابط تجريبية فقط.
 *
 * عندما تستبدلها بروابطك الحقيقية،
 * لن تحتاج إلى تغيير هذا الملف.
 */


/* =========================================================
   5. رسالة اختبار
   ========================================================= */

console.log(
    "GHOST Downloads: JavaScript loaded successfully."
);

