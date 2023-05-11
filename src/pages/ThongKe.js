import React, {useState, useEffect} from "react";
import classes from "./ThongKe.module.css";
const ThongKe = (props) => {
    const [totalCase, setTotalCase] = useState(0);
    const [totalDeath, setTotalDeath]= useState(0);
    const [totalHeal,setTotalHeal] = useState(0);
    const [newCase,setNewCase] = useState(0);
    const [newHeal,setNewHeal] = useState(0);
    const [newDeath,setNewDeath] = useState(0);
    const [updateTime,setUpdateTime] = useState('');
    useEffect(()=> {
        fetch(`https://covid-19-tracking.p.rapidapi.com/v1/${props.country}`, {
        headers:{
            'x-rapidapi-host': 'covid-19-tracking.p.rapidapi.com',
            'x-rapidapi-key': 'bacd67f5c4msh6c1504e09105c1cp11d6a3jsn4a0d0f863c16'
        }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setTotalCase(data['Total Cases_text']);
            setTotalDeath(data['Total Deaths_text']);
            setTotalHeal(data['Total Recovered_text']);
            setNewCase(data['New Cases_text']);
            setNewDeath(data['New Deaths_text']);
            setNewHeal(data['Active Cases_text']);
            setUpdateTime(data['Last Update']);
        });
        props.setIsShowForm(true);
    },[props.country])

    return <main>
    <div className={classes.main}>
        <section className={classes.section_total}>
            <div className={classes.section_total_title}>
                Thống kê
            </div>
            <div className={classes.section_total_main}>
                <div className={`${classes.section_total_total} ${classes.sc}`}>
                    <div className={classes.section_total_header}>
                        Tổng số ca mắc
                    </div>
                    <div className={classes.section_total_content}>
                        <p className={classes.section_total_number}>{totalCase}</p>
                    </div>
                </div>
                <div className={`${classes.section_total_death} ${classes.sc}`}>
                    <div className={classes.section_total_header}>
                        Tổng số ca tử vong
                    </div>
                    <div className={classes.section_total_content}>
                        <p className={classes.section_total_total_death}>{totalDeath}</p>
                    </div>
                </div>
                <div className={`${classes.section_total_heal} ${classes.sc}`}>
                    <div className={classes.section_total_header}>
                        Tổng số ca hồi phục
                    </div>
                    <div className={classes.section_total_content}>
                        <p className={classes.section_total_number}>{totalHeal}</p>
                    </div>
                </div>
            </div>
        </section>
        <section className={classes.section_total}>
            <div className={classes.section_total_title}>
                Cập nhật mới
            </div>
            <div className={classes.section_total_time}>
                <p>Làm mới vào lúc: </p> <span>{updateTime}</span>
            </div>
            <div className={classes.section_total_main}>
                <div className={`${classes.section_total_xv} ${classes.sc}`}>
                    <div className={classes.section_total_header}>
                        Số ca xuất viện mới
                    </div>
                    <div className={classes.section_total_content}>
                        <p className={classes.section_total_number}>{newHeal.length > 0 ? newHeal : 'Chưa có dữ liệu hôm nay'}</p>
                    </div>
                </div>
                <div className={`${classes.section_total_death} ${classes.sc}`}>
                    <div className={classes.section_total_header}>
                        Số ca tử vong mới
                    </div>
                    <div className={classes.section_total_content}>
                        <p className={classes.section_total_total_new_death}>{newDeath.length >  0 ? newDeath : 'Chưa có dữ liệu hôm nay'}</p>
                    </div>
                </div>
                <div className={`${classes.section_total_new_cases} ${classes.sc}`}>
                    <div className={classes.section_total_header}>
                        Số ca mắc mới
                    </div>
                    <div className={classes.section_total_content}>
                        <p className={classes.section_total_number}>{newCase.length > 0 ? newCase : 'Chưa có dữ liệu hôm nay'}</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</main>
}

export default ThongKe;