document.addEventListener('DOMContentLoaded', () => {
   const benefitsBtns = document.querySelectorAll('.benefits-btn');
   const group = document.querySelectorAll('.group');
   const checkboxes = document.querySelectorAll('.benefit-check');
   const scalesBtn = document.getElementById('scales-btn');
   const leaveFeedback = document.getElementById('leave-feedback');
   const modal = document.querySelector('.modal');
   const closeModalBtn = document.getElementById('close-modal-btn');
   const asideBodies = document.querySelectorAll('.aside-body-wrapper');
   const phoneNumber = document.getElementById('client-phone-field');
   const dateBirthField = document.getElementById('client-datebirth-field');

   benefitsBtns.forEach((btn, _, original) => {
       btn.addEventListener('click', e => {
           if (!e.target.classList.contains('active')) {
               original.forEach(item => item.classList.remove('active'));
               e.target.classList.add('active');

               asideBodies.forEach(item => item.classList.toggle('show'));
           }
       });
   });

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

    leaveFeedback.addEventListener('click', () => modal.style.display = 'flex');
    closeModalBtn.addEventListener('click', () => modal.style.display = 'none');

    dateBirthField.addEventListener('change', e => {
        e.target.value !== ''
            ? e.target.classList.add('has-value')
            : e.target.classList.remove('has-value');
    });

    Inputmask({
        "mask": "+7 (999) 99-99-999",
        showMaskOnHover: false
    }).mask(phoneNumber);
});