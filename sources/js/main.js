document.addEventListener('DOMContentLoaded', () => {
   const benefitsBtns = document.querySelectorAll('.benefits-btn');
   const group = document.querySelectorAll('.group');
   const checkboxes = document.querySelectorAll('.benefit-check');
   const scalesBtn = document.getElementById('scales-btn');

   benefitsBtns.forEach((btn, _, original) => {
       btn.addEventListener('click', e => {
           original.forEach(item => item.classList.remove('active'));
           e.target.classList.add('active');
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

    // feedbacks swiper
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        spaceBetween: 10,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});