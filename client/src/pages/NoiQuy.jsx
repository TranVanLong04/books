import { Link } from "react-router-dom";
import {
  BookOutlined,
  ClockCircleOutlined,
  WifiOutlined,
  WarningOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

function NoiQuy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-blue-100 py-10 px-4">

      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-8 text-center mb-10 border border-white/40">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-3">
            📚 Nội Quy Thư Viện
          </h1>
          <p className="text-gray-600 text-lg">
            Môi trường học tập văn minh – kỷ luật – hiệu quả
          </p>
        </div>

        {/* TOP CARDS */}
        <div className="grid lg:grid-cols-3 gap-6">

          <div className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <BookOutlined className="text-3xl text-blue-500 mb-3" />
            <h2 className="font-bold text-lg mb-2">Đối tượng</h2>
            <p className="text-gray-600 text-sm">
              Sinh viên, giảng viên, cán bộ trong trường.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <ClockCircleOutlined className="text-3xl text-indigo-500 mb-3" />
            <h2 className="font-bold text-lg mb-2">Thời gian</h2>
            <p className="text-gray-600 text-sm">
              Thứ 2 - 6: 7:30 – 17:00 <br />
              Thứ 7: 7:30 – 11:30
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <WifiOutlined className="text-3xl text-purple-500 mb-3" />
            <h2 className="font-bold text-lg mb-2">Internet</h2>
            <p className="text-gray-600 text-sm">
              Chỉ phục vụ học tập – tối đa 90 phút/lượt
            </p>
          </div>

        </div>

        {/* TIMELINE */}
        <div className="mt-12 bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-bold mb-6 text-blue-600">
            📌 Quy trình sử dụng
          </h2>

          <div className="space-y-4 border-l-4 border-blue-500 pl-4">
            <p>🔹 Gửi đồ tại tủ</p>
            <p>🔹 Xuất trình thẻ sinh viên</p>
            <p>🔹 Tự tra cứu và lấy sách</p>
            <p>🔹 Sử dụng tối đa 2 cuốn</p>
            <p>🔹 Trả đúng vị trí</p>
          </div>
        </div>

        {/* DETAIL CONTENT */}
        <div className="mt-12 bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8 border border-gray-100">

          <h2 className="text-2xl font-bold text-indigo-600 mb-6">
            📖 Nội dung chi tiết
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed">

            <div>
              <h3 className="font-semibold text-lg mb-2">1. Phương thức phục vụ</h3>
              <p>
                Thư viện hoạt động theo hình thức kho mở, bạn đọc tự tra cứu và tìm sách theo hướng dẫn.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">2. Thời gian mở cửa</h3>
              <ul className="list-disc ml-6">
                <li>Thứ 2 - 6: 7:30 – 11:30 | 13:30 – 17:00</li>
                <li>Sáng thứ 7: 7:30 – 11:30</li>
                <li>Chiều thứ 7 & Chủ nhật: nghỉ</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">3. Quy định phòng Internet</h3>
              <ul className="list-disc ml-6">
                <li>Chỉ dùng cho học tập, nghiên cứu</li>
                <li>Không truy cập nội dung xấu</li>
                <li>Tối đa 90 phút/lượt</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">4. Quy trình sử dụng phòng đọc</h3>
              <ul className="list-disc ml-6">
                <li>Gửi đồ tại tủ</li>
                <li>Xuất trình thẻ sinh viên</li>
                <li>Mượn tối đa 2 cuốn</li>
                <li>Trả sách đúng vị trí</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">5. Mượn sách về nhà</h3>
              <ul className="list-disc ml-6">
                <li>Sinh viên: 2 sách / 10 ngày</li>
                <li>Giảng viên: 3 sách / 15 ngày</li>
                <li>Không mượn trước giờ đóng cửa 15 phút</li>
              </ul>
            </div>

          </div>
        </div>

        {/* WARNING */}
        <div className="mt-8 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <WarningOutlined className="text-2xl" />
            <h2 className="font-bold text-lg">Xử lý vi phạm</h2>
          </div>
          <ul className="text-sm space-y-1">
            <li>• Trễ hạn: 2.000đ/ngày</li>
            <li>• Mất sách: đền gấp 2</li>
            <li>• Có thể bị khóa quyền sử dụng</li>
          </ul>
        </div>

        {/* NOTE */}
        <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-5 rounded-lg">
          <p className="text-blue-700 font-medium">
            💡 Lưu ý: Tuân thủ nội quy giúp tạo môi trường học tập tốt hơn cho tất cả mọi người.
          </p>
        </div>

        {/* CONTACT */}
        <div className="bg-white rounded-xl shadow mt-8 p-5 text-center">
          <h2 className="font-semibold mb-2">Mọi thắc mắc xin Liên hệ</h2>
          <p className="text-gray-600 text-sm">Email: Baquan@dau.edu.vn</p>
          <p className="text-gray-600 text-sm">SĐT: 0362545529</p>
        </div>

        {/* BACK */}
        <div className="mt-10 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition"
          >
            Quay lại trang chủ <ArrowRightOutlined />
          </Link>
        </div>

      </div>
    </div>
  );
}

export default NoiQuy;