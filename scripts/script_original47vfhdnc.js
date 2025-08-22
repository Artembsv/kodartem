ZZZ = {};
$(document).ready(function () {

    ZZZ.sozdat_samim = 0;
    $('#check').on('change', function () { // клик на чекбокс "создать поздравление самим"
        if (this.checked) {
            $('#samitxt').show();
            $('.dlina_pozdrav').addClass('show_dlina_pozdrav');
            $('.textarea_pozdrav').attr('disabled', true);

            ZZZ.sozdat_samim = 750;
            let num = $('[name="dlin"]:checked').parent('div').index() - 1;
            let samin_price = [30, 60, 120];
            ZZZ.dlitelnost_price = samin_price[num];
            ZZZ.total_price();
        } else {
            $('#samitxt').hide();
            $('.dlina_pozdrav').removeClass('show_dlina_pozdrav');
            $('.textarea_pozdrav').attr('disabled', false);
            ZZZ.sozdat_samim = 0;
            ZZZ.text_lenght();
            ZZZ.total_price();
        }
    });
    $('[name="dlin"]').on('change', function () { // клик на чекбокс "Длинна поздравления"
        if (this.checked) {
            $(this).attr('checked', true);
            let num = $(this).parent('div').index() - 1;
            let samin_price = [30, 60, 120];
            ZZZ.dlitelnost_price = samin_price[num];
            ZZZ.total_price();
        } else {
            $(this).attr('checked', false);
        }
    });











    $('#whatsapp').on('change', function () {
        if (this.checked) {
            $(this).attr('checked', true);
            $(this).siblings('input[type="text"]').show();
        } else {
            $(this).attr('checked', false);
            $(this).siblings('input[type="text"]').hide();
        }
    });

    $('#telegram').on('change', function () {
        if (this.checked) {
            $(this).attr('checked', true);
            $(this).siblings('input[type="text"]').show();
        } else {
            $(this).attr('checked', false);
            $(this).siblings('input[type="text"]').hide();
        }
    });






    ZZZ.srochnost_price = [0, 250, 900];
    $('[name="sroch"]').on('change', function () {
        if (this.checked) {
            $(this).attr('checked');
            ZZZ.srochnost_trf(this);
            ZZZ.total_price();
        }
        else {
            $(this).attr('checked', false);
        }
    });

    ZZZ.srochnost_trf = function (e) {
        ZZZ.srochnost_text = $(e).parent('div').children('label').html();
        $('.srochnost_text').html(ZZZ.srochnost_text);
        let num = $(e).parent('div').index() - 1;
        ZZZ.srochnost_num = num;
    }
    ZZZ.srochnost_trf($('[name="sroch"]').eq(0));






    $('.textarea_pozdrav').on('input', function () {
        ZZZ.text_lenght();
        ZZZ.total_price();
    });

    ZZZ.text_lenght = function () {
        let text = $('.textarea_pozdrav').val();
        ZZZ.dlitelnost_price = (text.length / 13).toFixed();
        $('#timetext').html(text.length + ' символа = ' + ZZZ.dlitelnost_price + ' секунд');
    }
    ZZZ.text_lenght();










    $('.next-step').on('click', function () {
        $("html, body").animate({
            scrollTop: (($('#order').offset()
                .top)) +
                "px"
        });
    });
    $(function () {
        $("a[href^='#']").click(function () {
            let _href = $(this).attr("href");
            if (_href == "#sami") {
                $("html, body").animate({ scrollTop: ($(this).offset().top + 10) + "px" });
                setTimeout(() => {
                    $('#check').trigger('click');
                }, 700);
            } else {
                $("html, body").animate({ scrollTop: ($(_href).offset().top - 30) + "px" });
                $('#mobile-menu').addClass('hidden');
            }
            return false;
        });
    });








    ZZZ.total_price = function () {
        let summ = 1400;
        // console.log(ZZZ);

        ZZZ.sozdat_samim ? summ += ZZZ.sozdat_samim : summ += 0;
        $('.sozdat_samim').html(ZZZ.sozdat_samim);

        let dlitelnost_price = parseInt(ZZZ.dlitelnost_price) * 15;
        $('.dlitelnost_price').html(dlitelnost_price);
        summ += dlitelnost_price;

        let srochnost_price = ZZZ.srochnost_price[ZZZ.srochnost_num];
        $('.srochnost_price').html(srochnost_price);

        summ += srochnost_price;
        $('.total_price').html(summ);
        $('#summsend').val(summ);
    }
    ZZZ.total_price();



    // $('#orderForm').on('submit', function (e) {
    // e.preventDefault(); // Отменяем отправку формы по умолчанию

    // const TOKEN = '7715552984:AAElJz73PNpSpuR3WDDvLdAwe2x5l56Wzrs'
    // const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
    // const CHAT_ID = '805085026';
    // let depart = 'Уфа'
    // let arrive = 'New York'
    // let date = 'Ща'
    // const message = `<b>Откуда</b>: ${depart} 
    //                 ${'\n'}<b>Куда</b >: ${arrive} 
    //                 ${'\n'}<b>Дата</b >: ${date}`;
    // $.get (URL_API, CHAT_ID, message);


    // var formData = $(this).serialize(); // Собираем данные формы
    // $.ajax({
    //     type: 'POST',
    //     url: '/order.php',
    //     data: formData,
    //     success: function (response) {
    //         // Обработка успешного ответа от сервера
    //         console.log(response);
    //         alert('Заказ успешно отправлен!\nМы свяжемся с вами в ближайшее время.');
    //         // $('#orderForm')[0].reset();
    //     },
    //     error: function (xhr, status, error) {
    //         // Обработка ошибок
    //         console.error(error);
    //     }
    // })

    // })


    // Обработчик события отправки формы
    $('#orderForm').on('submit', function (e) {
        e.preventDefault(); // Отменяем стандартное поведение формы
        const botToken = '7715552984:AAElJz73PNpSpuR3WDDvLdAwe2x5l56Wzrs'; // Токен вашего бота
        const chatId = '805085026'; // ID получателя (пользователя)
        const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`; // URL для отправки сообщения

        // Формируем сообщение в формате HTML
        let message = `
📩 Вам новая заявка:
`;

        $.each($(this).serializeArray(), function (i, field) {
            if (!field.value) field.value = '-';
            message += `<b>${field.name}:</b> ${field.value}\n`;
        })

        // Параметры, которые будем отправлять
        const params = {
            chat_id: chatId, // ID чата
            text: message, // Текст сообщения
            parse_mode: 'HTML' // Режим парсинга HTML
        };

        // Отправляем данные с помощью fetch API
        fetch(apiUrl, {
            method: 'POST', // Метод отправки
            headers: {
                'Content-Type': 'application/json', // Указываем тип содержимого
            },
            body: JSON.stringify(params) // Преобразуем параметры в JSON
        }).then((response) => {
            response => response.json();
            console.log(response); // Возвращаем ответ в формате JSON
        })
    });




        // Обработчик события отправки формы
    $('#reviewForm').on('submit', function (e) {
        e.preventDefault(); // Отменяем стандартное поведение формы
        const botToken = '7715552984:AAElJz73PNpSpuR3WDDvLdAwe2x5l56Wzrs'; // Токен вашего бота
        const chatId = '805085026'; // ID получателя (пользователя)
        const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`; // URL для отправки сообщения

        // Формируем сообщение в формате HTML
        let message = `
📩 Вам новый отзыв:
`;

        $.each($(this).serializeArray(), function (i, field) {
            if (!field.value) field.value = '-';
            message += `<b>${field.name}:</b> ${field.value}\n`;
        })

        // Параметры, которые будем отправлять
        const params = {
            chat_id: chatId, // ID чата
            text: message, // Текст сообщения
            parse_mode: 'HTML' // Режим парсинга HTML
        };

        // Отправляем данные с помощью fetch API
        fetch(apiUrl, {
            method: 'POST', // Метод отправки
            headers: {
                'Content-Type': 'application/json', // Указываем тип содержимого
            },
            body: JSON.stringify(params) // Преобразуем параметры в JSON
        }).then((response) => {
            response => response.json();
            console.log(response); // Возвращаем ответ в формате JSON
        })
    });




})



































document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
    });

    // Order form steps
    const nextButtons = document.querySelectorAll('.next-step');
    const prevButtons = document.querySelectorAll('.prev-step');
    const steps = document.querySelectorAll('.step');

    nextButtons.forEach(button => {
        button.addEventListener('click', function () {
            const currentStep = this.closest('.step');
            const currentStepIndex = Array.from(steps).indexOf(currentStep);

            currentStep.classList.add('hidden');
            steps[currentStepIndex + 1].classList.remove('hidden');

            // Update progress indicators
            document.querySelectorAll('.w-10.h-10')[currentStepIndex + 1].classList.remove('bg-gray-300', 'text-gray-600');
            document.querySelectorAll('.w-10.h-10')[currentStepIndex + 1].classList.add('bg-primary', 'text-white');
            document.querySelectorAll('.mt-2.text-sm')[currentStepIndex + 1].classList.remove('text-gray-500');
        });
    });

    prevButtons.forEach(button => {
        button.addEventListener('click', function () {
            const currentStep = this.closest('.step');
            const currentStepIndex = Array.from(steps).indexOf(currentStep);

            currentStep.classList.add('hidden');
            steps[currentStepIndex - 1].classList.remove('hidden');

            // Update progress indicators
            document.querySelectorAll('.w-10.h-10')[currentStepIndex].classList.remove('bg-primary', 'text-white');
            document.querySelectorAll('.w-10.h-10')[currentStepIndex].classList.add('bg-gray-300', 'text-gray-600');
            document.querySelectorAll('.mt-2.text-sm')[currentStepIndex].classList.add('text-gray-500');
        });
    });

    // Other occasion field toggle
    const occasionSelect = document.getElementById('occasionSelect');
    const otherOccasionField = document.getElementById('otherOccasionField');

    occasionSelect.addEventListener('change', function () {
        if (this.value === 'other') {
            otherOccasionField.style.display = 'block';
        } else {
            otherOccasionField.style.display = 'none';
        }
    });

    // Template selection
    const templateOptions = document.querySelectorAll('.template-option');
    templateOptions.forEach(option => {
        option.addEventListener('click', function () {
            templateOptions.forEach(opt => opt.classList.remove('border-primary'));
            this.classList.add('border-primary');
            $('.galka').css('display', 'none');
            $(this).find('.galka').css('display', 'block');
            $('[name="template"]').val($(this).children('p').html());
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Reviews slider
    const reviewsContainer = document.getElementById('reviewsContainer');
    const prevReviewBtn = document.getElementById('prevReview');
    const nextReviewBtn = document.getElementById('nextReview');
    let currentSlide = 0;
    const totalSlides = document.querySelectorAll('#reviewsContainer > div').length;

    function updateSlidePosition() {
        let slideWidth;
        if (window.innerWidth >= 1024) {
            slideWidth = 100 / 3; // 3 slides visible on large screens
        } else if (window.innerWidth >= 768) {
            slideWidth = 50; // 2 slides visible on medium screens
        } else {
            slideWidth = 100; // 1 slide visible on small screens
        }

        reviewsContainer.style.transform = `translateX(-${currentSlide * slideWidth}%)`;
    }

    prevReviewBtn.addEventListener('click', function () {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlidePosition();
        }
    });

    nextReviewBtn.addEventListener('click', function () {
        const visibleSlides = window.innerWidth >= 1024 ? 3 : (window.innerWidth >= 768 ? 2 : 1);
        if (currentSlide < totalSlides - visibleSlides) {
            currentSlide++;
            updateSlidePosition();
        }
    });

    window.addEventListener('resize', updateSlidePosition);
    updateSlidePosition();
});

document.addEventListener('DOMContentLoaded', function () {
    // Work modal
    $('.ShowWorkModal').on('click', function () {
        $('.workModal').removeClass('hidden');
        $('.closeworkModal').on('click', function () {
            $('.workModal').addClass('hidden');
        });
        $('.workModal').on('click', function () {
            $('.workModal').addClass('hidden');
        });
    });

    // Review modal
    const addReviewBtn = document.getElementById('addReviewBtn');
    const reviewModal = document.getElementById('reviewModal');
    const closeReviewModal = document.getElementById('closeReviewModal');
    const reviewForm = document.getElementById('reviewForm');

    addReviewBtn.addEventListener('click', function () {
        reviewModal.classList.remove('hidden');
    });

    closeReviewModal.addEventListener('click', function () {
        reviewModal.classList.add('hidden');
    });

    reviewModal.addEventListener('click', function (e) {
        if (e.target === reviewModal) {
            reviewModal.classList.add('hidden');
        }
    });

    reviewForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // Here would be the code to submit the review
        alert('Спасибо за ваш отзыв!');
        reviewModal.classList.add('hidden');
    });

    // Rating stars
    const ratingStars = document.querySelectorAll('#ratingStars i');

    ratingStars.forEach(star => {
        star.addEventListener('click', function () {
            const rating = parseInt(this.getAttribute('data-rating'));

            ratingStars.forEach(s => {
                const starRating = parseInt(s.getAttribute('data-rating'));
                if (starRating <= rating) {
                    s.classList.add('text-yellow-400');
                } else {
                    s.classList.remove('text-yellow-400');
                }
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Примеры видеопоздравлений
    // const playButtons = document.querySelectorAll('.video-container button');

    // playButtons.forEach(button => {
    //     button.addEventListener('click', function () {
    //         const container = this.closest('.video-container');
    //         alert('Здесь будет воспроизведение видео');
    //     });
    // });
});



































!function (t, e) { var o, n, p, r; e.__SV || (window.posthog = e, e._i = [], e.init = function (i, s, a) { function g(t, e) { var o = e.split("."); 2 == o.length && (t = t[o[0]], e = o[1]), t[e] = function () { t.push([e].concat(Array.prototype.slice.call(arguments, 0))) } } (p = t.createElement("script")).type = "text/javascript", p.crossOrigin = "anonymous", p.async = !0, p.src = s.api_host.replace(".i.posthog.com", "-assets.i.posthog.com") + "/static/array.js", (r = t.getElementsByTagName("script")[0]).parentNode.insertBefore(p, r); var u = e; for (void 0 !== a ? u = e[a] = [] : a = "posthog", u.people = u.people || [], u.toString = function (t) { var e = "posthog"; return "posthog" !== a && (e += "." + a), t || (e += " (stub)"), e }, u.people.toString = function () { return u.toString(1) + ".people (stub)" }, o = "init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug".split(" "), n = 0; n < o.length; n++)g(u, o[n]); e._i.push([i, s, a]) }, e.__SV = 1) }(document, window.posthog || []);
posthog.init('phc_t9tkQZJiyi2ps9zUYm8TDsL6qXo4YmZx0Ot5rBlAlEd', {
    api_host: 'https://us.i.posthog.com',
    autocapture: false,
    capture_pageview: false,
    capture_pageleave: false,
    capture_performance: {
        web_vitals: false,
    },
    rageclick: false,
})
window.shareKey = 'Mv90_uSIz_26hKe5qHhGVg';
window.host = 'readdy.ai';











