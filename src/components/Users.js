import React from 'react';

import './UserStyle.css';

function Users() {
    return (
        <div className="Users" >
            <div className="Users_box" >
            <form action="/action_page.php">
    <label for="name">Họ và Tên:</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

    <label for="phonenumber">Số Điện Thoại:</label>
    <input type="number" id="phoneNumber" name="number" placeholder="PhoneNumber..."/>
    
    <label for="email">Địa chỉ email: </label>
    <input  type="email" id="email" name="email" placeholder="Email..."/>

    <label for="date">Ngày sinh: </label>
    <input  type="date" id="date" name="date" />

    <label for="password">Mật Khẩu:</label>
    <input type="password" id="pass" name="pass" placeholder="Password... "/>

    <label for="country">Thành Phố</label>
    <select id="country" name="city">
      <option value="Hanoi">Hà Nội</option>
      <option value="VinhPhuc">Vĩnh Phúc</option>
      <option value="HaiPhong">Hải Phòng</option>
      <option value="DaNang">Đà Nẵng</option>
      <option value="HCM">Thành phố Hồ Chí Minh</option>
      <option value="CANTHO">Cần Thơ</option>
      <option value="BACNINH">Bắc Ninh</option>
      <option value="BINHDUONG">Bình Dương</option>
      <option value="HAIDUONG">Hải Dương</option>
      <option value="PHUTHO">Phú Thọ</option>
      <option value="ANGIANG">An Giang</option>
      <option value="HANAM">Hà Nam</option>
      <option value="SONLA">Sơn La</option>
      <option value="THAIBINH">Thái Bình</option>
      <option value="QUANGNINH">Quảng Ninh</option>
      <option value="TUYENQUANG">Tuyên Quang</option>
      <option value="HAUGIANG">Hậu Giang</option>
      <option value="NAMDINH">Nam Định</option>
      <option value="VINHLONG">Vĩnh Long</option>
      <option value="BINHTHUAN">Bình Thuận</option>
      <option value="CAOBANG">Cao Bằng</option>
      <option value="LAICHAU">Lai Châu</option>
      <option value="DIENBIEN">Điện Biên</option>
      <option value="QUANGTRI">Quảng Trị</option>
      <option value="DAKNONG">Đắk Nông</option>
      <option value="YENBAI">Yên Bái</option>
      <option value="SOCTRANG">Sóc Trăng</option>
      <option value="THANHHOA">Thanh Hóa</option>
      <option value="GIALAI">Gia Lai</option>
      <option value="BRVT">Bà Rịa - Vũng Tàu</option>
      <option value="BACCAN">Bắc Kạn</option>
      <option value="CAMAU">Cà Mau</option>
      <option value="DAKLAK">Đắk Lắk</option>
      <option value="DIENBIEN">Điện Biên</option>
      <option value="HATINH">Hà Tĩnh</option>
      <option value="HAGIANG">Hà Giang</option>
      <option value="NGHEAN">Nghệ An</option>
    </select>
     
    <label for="address">Địa chỉ:</label>
    <input type="text" id="address" name="address" placeholder="Địa chỉ của bạn... "/>
    <input type="submit" value="Đăng ký"/>
  </form>
            </div>
            
            </div>
    );
}

export default Users;