$(document).on('ready', function () {
    setTimeout(() => {


        $('#form1173659661 .t-quiz__cover__container').html(`
        <div class="t-quiz__consultant__container" style="margin-top: 20px;">
            <div class="t-quiz__consultant__info-container" style="    margin: auto;">
            <img class="t-quiz__consultant__img" imgfield="img1" src="https://static.tildacdn.com/tild3439-3266-4230-a233-356437643830/Frame_54353.png" style="    margin-left: -23px;">
            <div class="t-quiz_about" style="background-image: url(https://optim.tildacdn.com/tild3936-3635-4237-b433-636237663630/-/resize/342x/-/format/webp/Rectangle_8.png.webp);    background-repeat: no-repeat;
    background-position: 0px 17px;
    padding: 0 0 0 12px;    margin: 27px 0 0 5px;">
                <div class="t-quiz__consultant__name-container"> <span field="descr2"
                        class="t-quiz__consultant__name t-name t-name_xs">
                        <div style="font-size: 20px;" data-customstyle="yes">
                            <p style="text-align: left;"><strong style="font-family: Inter;">Глеб Соловьев</strong></p>
                        </div>
                    </span> <span field="descr3" class="t-quiz__consultant__descr t-descr t-descr_xxs">
                        <div style="font-size: 16px;" data-customstyle="yes">
                            <p style="text-align: left;"><span style="font-family: Inter; font-weight: 400;    margin: 5px 0 0 0;">Основатель Sales
                                    Park</span></p>
                        </div>
                    </span> </div>
            </div>
                    
            </div>
            <div class="t-quiz__consultant__msg-bubble" style="    background: #E0E0EC;
    margin: 0 10px;
    padding: 19px;
    width: auto;">

                <div class="js-consultant-msg t-quiz__consultant__msg t-descr t-descr_xs" class-"    font-size: 18px;">Для расчета стоимости, пожалуйста, ответьте на 4 вопроса о вашей вакансии<br></div>
                <img class="t-img t-width t107__widthauto loaded" src="https://optim.tildacdn.com/tild6265-6230-4438-a239-363730376162/-/format/webp/Polygon_2.png.webp" data-original="https://static.tildacdn.com/tild6265-6230-4438-a239-363730376162/Polygon_2.png" imgfield="img" alt="" style="    position: absolute;
    top: -22px;
    left: 43px;width: 20px;">
            </div>
            <span style="font-weight: 400;
    font-size: 18px;
    line-height: 139%;
    font-family: Inter, Arial, sans-serif;
    margin: 36px 36px 0px;
    text-align: center;">Дарим скидку за ваши ответы.<br>И с каждым ответом она растет! </span>
        </div>`)








        $('#form1173659661 .t-quiz__contact-form__header__text-wrapper').next().hide()


        $('#form1173659661 .t-quiz__contact-form__header__text-wrapper').html(`
        <div class="t-quiz__consultant__container" style="margin-top: 20px;">
            <div class="t-quiz__consultant__info-container" style="    margin: auto;">
            <img class="t-quiz__consultant__img" imgfield="img1" src="https://static.tildacdn.com/tild3439-3266-4230-a233-356437643830/Frame_54353.png" style="    margin-left: -23px;">
            <div class="t-quiz_about" style="background-image: url(https://optim.tildacdn.com/tild3936-3635-4237-b433-636237663630/-/resize/342x/-/format/webp/Rectangle_8.png.webp);    background-repeat: no-repeat;
    background-position: 0px 17px;
    padding: 0 0 0 12px;    margin: 27px 0 0 5px;">
                <div class="t-quiz__consultant__name-container"> <span field="descr2"
                        class="t-quiz__consultant__name t-name t-name_xs">
                        <div style="font-size: 20px;" data-customstyle="yes">
                            <p style="text-align: left;"><strong style="font-family: Inter;">Глеб Соловьев</strong></p>
                        </div>
                    </span> <span field="descr3" class="t-quiz__consultant__descr t-descr t-descr_xxs">
                        <div style="font-size: 16px;" data-customstyle="yes">
                            <p style="text-align: left;"><span style="font-family: Inter; font-weight: 400;    margin: 5px 0 0 0;">Основатель Sales
                                    Park</span></p>
                        </div>
                    </span> </div>
            </div>
                    
            </div>
            <div class="t-quiz__consultant__msg-bubble" style="    background: #E0E0EC;
    margin: 0 10px;
    padding: 19px;
    width: auto;">

                <div class="js-consultant-msg t-quiz__consultant__msg t-descr t-descr_xs" class-"    font-size: 18px;">Скидка за вами! Оставьте ваши контакты, и мы сообщим вам стоимость в удобной для вас форме<br></div>
                <img class="t-img t-width t107__widthauto loaded" src="https://optim.tildacdn.com/tild6265-6230-4438-a239-363730376162/-/format/webp/Polygon_2.png.webp" data-original="https://static.tildacdn.com/tild6265-6230-4438-a239-363730376162/Polygon_2.png" imgfield="img" alt="" style="    position: absolute;
    top: -22px;
    left: 43px;width: 20px;">
            </div>
            <span style="font-weight: 400;
    font-size: 18px;
    line-height: 139%;
    font-family: Inter, Arial, sans-serif;
    margin: 10px 36px 0px;
    font-weight: bold;">Ваша текущая скидка: 5000 ₽</span>
        </div>`)

        let ttxt = [
            '',
            'Если пока нет точного понимания кто вам нужен, мы сформируем профиль, исходя из ваших целей и задач',
            'Укажите зарплату, которую будет получать сотрудник при хорошей работе, включая премиальные',
            'Если сотрудник нужен срочно, мы свяжемся с вами как можно быстрее и приступим к поиску немедленно'
        ]
        $.each($('#form1173659661 .t-input-group.t-input-group_rd.t-input-group_one-col .t-input-block.t-input-block_rd-flex.t-input-block_rd-width50'), function (index, value) {
            let ddd = "<div class='ttxt'>" + ttxt[index] + "</div>";
            $(value).append(ddd)
        })

$('.t-btn.t-quiz__btn_start.t-quiz__btn_md span').html('Рассчитать стоимость')

    }, 1);
})

