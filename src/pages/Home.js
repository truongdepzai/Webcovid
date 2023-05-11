import react from "react";
import classes from "./Home.module.css";
import bg from "../components/images/bg.jpeg"
import mask from "../components/images/mask.jpeg";
import people from "../components/images/people.png";
import distance from "../components/images/distance.png";
import wash from "../components/images/wash.png"
import khaibao from "../components/images/khaibao.jpeg"
const Home = (props) => {
    return <main className={classes.main}>
    <section className={classes.section_main}>
        <div className={classes.section_main_img}>
            <img src={bg} alt=""/>
        </div>
    </section>
    <section className={classes.section_intro}>
        <div className={classes.section_intro_header}>
            <h3>Chung sống an toàn với đại dịch</h3>
        </div>
        <div className={classes.section_intro_intro}>
            <p>Thực hiện thông điệp <span>5K</span> của chính phủ</p>
        </div>
    </section>
    <div className={`${classes.section} ${classes.section_1}`}>
        <div className={classes.section_left}>
            <div className={classes.section_header}>
                <p><span>K</span>hẩu trang</p>
            </div>
            <div className={classes.section_content}>
                <div className={`${classes.section_content} ${classes.section_content_1}`}>
                    <div className={classes.section_content_header}>
                        <p>Đeo khẩu trang vải</p>
                    </div>
                    <p className={classes.section_content_content}>
                         thường xuyên tại nơi công cộng, nơi tập trung đông người
                    </p>
                </div>
                <div className={`${classes.section_content} ${classes.section_content_2}`}>
                    <div className={classes.section_content_header}>
                        <p>Đeo khẩu trang y tế</p>
                    </div>
                    <p className={classes.section_content_content}>
                        tại các cơ sở y tế, khu cách ly
                    </p>
                </div>
            </div>
        </div>
        <div className={classes.section_right}>
            <div className={classes.section_img}>
                <img src={mask} alt="mask"/>
            </div>
        </div>
    </div>
    <div className={`${classes.section} ${classes.section_2}`}>
        <div className={classes.section_left}>
            <div className="section-img">
                <img src={distance} alt="mask"/>
            </div>
        </div>
        <div className={classes.section_right}>
            <div className={classes.section_header}>
                <p><span>K</span>hoảng cách</p>
            </div>
            <div className={classes.section_content}>
                <div className={`${classes.section_content} ${classes.section_content_1}`}>
                    <div className={classes.section_content_header}>
                        <p>Giữ khoảng cách</p>
                    </div>
                    <p className={classes.section_content_content}>
                        Khi tiếp xúc với người khác
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div className={`${classes.section} ${classes.section_3}`}>
        <div className={classes.section_left}>
            <div className={classes.section_header}>
                <p><span>K</span>hông tụ tập</p>
            </div>
            <div className={classes.section_content}>
                <div className={`${classes.section_content} ${classes.section_content_1}`}>
                    <div className={classes.section_content_header}>
                        <p>Không tụ tập</p>
                    </div>
                    <p className={classes.section_content_content}>
                        Không tụ tập quá nhiều người
                    </p>
                </div>
            </div>
        </div>
        <div className={classes.section_right}>
            <div className={classes.section_img}>
                <img src={people}alt="mask"/>
            </div>
        </div>
    </div>
    <div className={`${classes.section} ${classes.section_4}`}>
        <div className={classes.section_left}>
            <div className={classes.section_img}>
                <img src={wash} alt="mask"/>
            </div>
        </div>
        <div className={classes.section_right}>
            <div className={classes.section_header}>
                <p><span>K</span>hử khuẩn</p>
            </div>
            <div className={classes.section_content}>
                <div className={`${classes.section_content} ${classes.section_content_1}`}>
                    <div className={classes.section_content_header}>
                        <p>Rửa tay</p>
                    </div>
                    <p className={classes.section_content_content}>
                        bằng xà phòng hoặc các dung dịch sát khuẩn
                    </p>
                </div>
                <div className={`${classes.section_content} ${classes.section_content_2}`}>
                    <div className={classes.section_content_header}>
                        <p>Vệ sinh các bề mặt</p>
                    </div>
                    <p className={classes.section_content_content}>
                        chú ý vệ sinh các bề mặt nhiều người tiếp xúc như tay nắm cửa, bàn ghế...
                    </p>
                </div>
                <div className={`${classes.section_content} ${classes.section_content_3}`}>
                    <div className={classes.section_content_header}>
                        <p>Giữ vệ sinh</p>
                    </div>
                    <p className={classes.section_content_content}>
                        Tắm giặt  và vệ sinh các vật dụng cá nhân
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div className={`${classes.section} ${classes.section_5}`}>
        <div className={classes.section_left}>
            <div className={classes.section_header}>
                <p><span>K</span>hai báo y tế</p>
            </div>
            <div className={classes.section_content}>
                <div className={`${classes.section_content} ${classes.section_content_1}`}>
                    <div className={classes.section_content_header}>
                        <p>Khai báo</p>
                    </div>
                    <p className={classes.section_content_content}>
                        Mỗi khi bạn hoặc những người xung quanh đi xa về hoặc có tiếp xúc với người bệnh
                    </p>
                    <div className={classes.ct}>
                        <a className={classes.cta} href="https://tokhaiyte.vn/">Khai báo ngay</a>
                    </div>
                </div>
            </div>
        </div>
        <div className={classes.section_right}>
            <div className={classes.section_img}>
                <img src={khaibao} alt="mask"/>
            </div>
        </div>
    </div>
</main>
}
export default Home;