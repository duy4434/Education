// เป็นการคำนวนของผู้ใช้ว่ามีการ Scoll ถึงจุดไหน

const card = document.querySelectorAll('.card');     //ประกาศตัวแปรแล้วดึงเอา Card ทั้งหมดมาแสดง

window.addEventListener('scroll',showCard)           //เมื่อผู้ใช้งาน Scroll ให้เรียกฟังก์ชั่น ShowCard

function showCard(){
    const caculateHeight = window.innerHeight-300;       

    card.forEach(card=>{                                  //ให้ไปวนลูปทุกตัว
        const topPosition = card.getBoundingClientRect().top;   //สรา้งตัวแปรโดยใช้ แอโร่ฟังก์ชั่น
        if(topPosition<caculateHeight){                         //ถ้าน้อยกว่า caculateHeight                  
            // console.log("slide in");
            card.classList.add('active');                       //การแสดงผล
        }else{
            // console.log("slide out");
             card.classList.remove('active');
        }
    });
}