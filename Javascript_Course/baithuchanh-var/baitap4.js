function Letter() {
    let name = prompt("Nhap ten nguoi nhan thu:");
    let date = prompt("Nhap ngay goi thu");
        if (date < 10) {
            date = "0" + date
        }
            else {
                date = date
            }
    let month = prompt("Nhap thang goi thu");
        if (month < 10) {
            month = "0" + month
        }
            else {
                month = month
            }
    let year = prompt("Nhap nam goi thu");
    let locate = prompt("Nhap dia diem goi thu");
    document.getElementById("bai4").innerHTML = name + " thuong nho," + "<br/>" + " Em không biết phải nói sao để anh hiểu rằng, em nhớ anh thật nhiều. Em yêu anh đến khi trái tim này tan thành nghìn mảnh. Tất cả những gì em yêu thương, em khát khao và cần đến, chính là anh, mãi mãi về sau. Em chỉ muốn ở bên anh, và anh yêu hỡi, em sẽ trở thành người phụ nữ như anh mong muốn." + "<br/>" + " Có phải em thật tệ hại, khi cứ nghĩ đến anh thật nhiều, thật lâu và nhất là mỗi khi đêm xuống? Em hứa sẽ sẽ cố gắng triệu triệu lần hơn thế. Nhưng hơn tất cả, em chỉ mong một ngày nào đó, anh sẽ tự hào về em, như tự hào về vợ của anh, và mẹ của các con anh (ít nhất là 2 nhé, em vừa mới quyết định đấy!). Em nhớ thật nhiều cảm giác mỗi đêm anh ôm em và ru em ngủ trong vòng tay. Đêm nay, em chỉ muốn được gần bên anh… và anh biết không, trái tim em đang đau đớn đến nhường nào." + "<br/>" + "Anh yêu thương, đừng bao giờ rời xa em nữa nhé. Yêu anh rất nhiều." + "<br/>" + locate + ", " + "ngay " + date + " thang " + month + " nam " + year
        }