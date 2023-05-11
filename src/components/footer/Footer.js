import React from "react";
import classes from "./Footer.module.css";
const Footer = () => {
    return <footer class={`${classes.footer} bg-dark`}>
    <div className={classes.footer_left}>
        <div className={classes.footer_title}>
            Thông tin liên hệ
        </div>
        <div className={classes.footer_content}>
            Hồ Văn Trường - 51900262
        </div>
    </div>
    <div className={classes.footer_center}>
        <div className={classes.footer_title}>
            Thông tin liên hệ
        </div>
        <div className={classes.footer_content}>
           Nguyễn Lê Đông Triều - 51900255
        </div>
    </div>
    <div className={classes.footer_right}>
        <div className={classes.footer_title}>
            Thông tin liên hệ
        </div>
        <div className={classes.footer_content}>
            Trương Nhật Duy - 51900325
        </div>
    </div>
</footer>
}
export default Footer;