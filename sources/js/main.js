document.addEventListener('DOMContentLoaded', () => {
   const benefitsBtns = document.querySelectorAll('.benefits-btn');
   const group = document.querySelectorAll('.group');
   const checkboxes = document.querySelectorAll('.benefit-check');
   const scalesBtn = document.getElementById('scales-btn');

   const leaveFeedback = document.getElementById('leave-feedback');
   const modal = document.querySelector('.modal');
   const modalBody = document.querySelectorAll('.modal-body');
   const closeModalBtn = document.getElementById('close-modal-btn');

   const asideBodies = document.querySelectorAll('.aside-body-wrapper');

   const phoneNumber = document.getElementById('client-phone-field');
   const dateBirthField = document.getElementById('client-datebirth-field');

   const filesTabs = document.querySelectorAll('.files-tab');
   const filesContainers = document.querySelectorAll('.files-items');
   const addNewFile = document.getElementById('add-file-btn');

   group.forEach(item => {
       item.addEventListener('click', e => {
           const thisBrother = e.currentTarget.nextElementSibling;

           let add;
           let remove;
           let groupBodyHeight;

           if (e.currentTarget.classList.contains('closed')) {
               remove = 'closed';
               add = 'opened';
               groupBodyHeight = thisBrother.querySelector('.group-table').getBoundingClientRect().height;
           } else {
               remove = 'opened';
               add = 'closed';
               groupBodyHeight = 0;
           }

           e.currentTarget.classList.remove(remove);
           e.currentTarget.classList.add(add);

           thisBrother.style.height = `${groupBodyHeight}px`;
       });
   });

    checkboxes.forEach(checkbox => {
       checkbox.addEventListener('change', () => {
           const checkedAmount = document.querySelectorAll('.benefit-check:checked').length;
           scalesBtn.innerText = checkedAmount;
       });
   });

    // слайдер с отзывами
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        allowTouchMove: false,
        spaceBetween: 10,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    // -------------------

    const modalOpener = modalBody => {
        modal.style.display = 'flex'
        modalBody.classList.add('show');
    }

    leaveFeedback.addEventListener('click', () => modalOpener(modalBody[0])); // открывает тело "Оставить отзыв"
    addNewFile.addEventListener('click', () => modalOpener(modalBody[1])); // открывает тело "Добавить файл"
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none'
        modalBody.forEach(body => body.classList.remove('show'));
    });

    dateBirthField.addEventListener('change', e => {
        e.target.value !== ''
            ? e.target.classList.add('has-value')
            : e.target.classList.remove('has-value');
    });

    Inputmask({
        "mask": "+7 (999) 99-99-999",
        showMaskOnHover: false
    }).mask(phoneNumber);

    const toggler = (e, collection, original, visibleClass) => {
        if (!e.target.classList.contains('active')) {
            original.forEach(item => item.classList.remove('active'));
            e.target.classList.add('active');

            collection.forEach(item => item.classList.toggle(visibleClass));
        }
    }

    benefitsBtns.forEach((btn, _, original) => {
        btn.addEventListener('click', e => toggler(e, asideBodies, original, 'show'));
    });

    filesTabs.forEach((tab, _, original) => {
        tab.addEventListener('click', e => toggler(e, filesContainers, original, 'flex'));
    });
});
