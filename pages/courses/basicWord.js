import React from 'react';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Signup from '../../components/templates/Signup';
import CourseTemplate from '@/components/modules/course/CourseTemplate';
import testData from '@/assets/Tests/sampleTest';

const BasicWord = () => {
    const courseData = {
        courseName:"آموزش مقدماتی ورد",
        coursePublishDate:'8 فروردین 1404',
        courseTumbnailSrc:"/images/courses/basicWord/Tumbnail.png",
        courseCaption:"دوره مقدماتی ورد یک آموزش کاربردی برای آشنایی با اصول اولیه Microsoft Word است. در این دوره، معلمان یاد می‌گیرند چگونه اسناد متنی ایجاد و ویرایش کنند، تنظیمات صفحه را مدیریت کنند، از ابزارهای قالب‌بندی استفاده کنند و جداول و تصاویر را به متن اضافه کنند.\n<br />این دوره به‌صورت گام‌به‌گام طراحی شده تا افراد بدون پیش‌زمینه قبلی نیز بتوانند به‌راحتی مهارت‌های موردنیاز را کسب کنند. با شرکت در این دوره، توانایی کار با یکی از پرکاربردترین نرم‌افزارهای اداری را خواهید یافت و می‌توانید محتوای آموزشی خود را حرفه‌ای‌تر تنظیم کنید.",
        courseQuestions: testData.questions,
        courseSlug:"/courses/basicWord",
        courseTime:"1:32:20",
        courseVideos:"11",
        courseCoverPhoto:"/images/courses/basicWord/Tumbnail.png",
        courseEpizodes:[
            {caption:"قسمت اول: معرفی دوره" , src:"https://jahanaraedu.storage.c2.liara.space/basic-word-course/%D9%82%D8%B3%D9%85%D8%AA%20%D8%A7%D9%88%D9%84.mp4"} , 
            {caption:"قسمت دوم: نصب آفیس 2024" , src:"https://jahanaraedu.storage.c2.liara.space/basic-word-course/%D9%82%D8%B3%D9%85%D8%AA%20%D8%AF%D9%88%D9%85.mp4"} , 
            {caption:"قسمت سوم: ایجاد سند جدید" , src:"https://jahanaraedu.storage.c2.liara.space/basic-word-course/%D9%82%D8%B3%D9%85%D8%AA%20%D8%B3%D9%88%D9%85.mp4"} , 
            {caption:"قسمت چهارم: سربرگ File" , src:"https://jahanaraedu.storage.c2.liara.space/basic-word-course/%D9%82%D8%B3%D9%85%D8%AA%20%DA%86%D9%87%D8%A7%D8%B1%D9%85.mp4"} , 
            {caption:"قسمت پنجم: سربرگ Home - قسمت اول" , src:"https://jahanaraedu.storage.c2.liara.space/basic-word-course/%D9%82%D8%B3%D9%85%D8%AA%20%D9%BE%D9%86%D8%AC%D9%85.mp4"} , 
            {caption:"قسمت ششم: سربرگ Home - قسمت دوم" , src:"https://jahanaraedu.storage.c2.liara.space/basic-word-course/%D9%82%D8%B3%D9%85%D8%AA%20%D8%B4%D8%B4%D9%85.mp4"} , 
            {caption:"قسمت هفتم: سربرگ insert - قسمت اول" , src:"https://jahanaraedu.storage.c2.liara.space/basic-word-course/%D9%82%D8%B3%D9%85%D8%AA%20%D9%87%D9%81%D8%AA%D9%85.mp4"} , 
            {caption:"قسمت هشتم: سربرگ insert - قسمت دوم" , src:"https://jahanaraedu.storage.c2.liara.space/basic-word-course/%D9%82%D8%B3%D9%85%D8%AA%20%D9%87%D8%B4%D8%AA%D9%85.mp4"} , 
            {caption:"قسمت نهم: سربرگ Design و Draw" , src:"https://jahanaraedu.storage.c2.liara.space/basic-word-course/%D9%82%D8%B3%D9%85%D8%AA%20%D9%86%D9%87%D9%85.mp4"} , 
            {caption:"قسمت دهم: سربرگ Layout و Refrences" , src:"https://jahanaraedu.storage.c2.liara.space/basic-word-course/%D9%82%D8%B3%D9%85%D8%AA%20%D8%AF%D9%87%D9%85.mp4"} , 
            {caption:"قسمت یازدهم: مرور نکات و جمع بندی" , src:"https://jahanaraedu.storage.c2.liara.space/basic-word-course/%D9%82%D8%B3%D9%85%D8%AA%20%DB%8C%D8%A7%D8%B2%D8%AF%D9%87%D9%85.mp4"} , 
        ]
    }
    const router = useRouter();
    const [localSign, setLocalSign] = useState(false);
    const [isChecking, setIsChecking] = useState(true); // حالت اولیه برای بررسی
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedUserName = localStorage.getItem('userName');
            if (storedUserName) {
                setLocalSign(true);
            }
            setIsChecking(false); // بعد از بررسی وضعیت، مقدار حالت را به false تغییر می‌دهیم
        }
    }, []);

    if (isChecking) {
        return (
            <>
                <Head>
                    <title>دوره Word مقدماتی | سامانه یادگیری مستمر دبستان شهید جهان‌آرا</title>
                </Head>
                <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                    <div className="spinner-border" role="status">
                        <span className="sr-only"></span>
                    </div>
                </div>
            </>
        );
    }

    return (
        <div>
            <div className='pb-4'>
                <Head>
                <title>دوره Word مقدماتی | سامانه یادگیری مستمر دبستان شهید جهان‌آرا</title>
                </Head>
                {localSign ? <CourseTemplate courseData={courseData} /> : <Signup localSign={localSign} setLocalSign={setLocalSign} />}
            </div>
        </div>
    );
};

export default BasicWord;
