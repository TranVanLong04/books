import { useEffect } from 'react';
import CardBody from './components/Cardbody';
import Footer from './components/Footer';
import Header from './components/Header';
import { requestGetAllProduct } from './config/request';
import { useState } from 'react';

function App() {
    const [dataProduct, setDataProduct] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await requestGetAllProduct();
                setDataProduct(res?.metadata || []);
            } catch (error) {
                console.error("Failed to fetch products. Backend might be offline.", error);
                setDataProduct([]);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="bg-slate-50 min-h-screen flex flex-col font-sans">
            <header className="sticky top-0 z-50">
                <Header />
            </header>

            {/* Hero Section */}
            <section className="bg-gradient-to-b from-blue-50/50 to-slate-50 text-slate-800 py-16 px-4 relative overflow-hidden">
                {/* Decorative background elements for light theme */}
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
                <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
                
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-slate-800 drop-shadow-sm">
                        Khám Phá Tri Thức <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Cùng Thư Viện</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
                        Hệ thống quản lý thư viện hiện đại giúp bạn dễ dàng tìm kiếm, tra cứu và mượn sách trực tuyến. 
                        Nơi cung cấp nguồn tài liệu phong phú, giao diện thân thiện và quy trình nhanh chóng, mang lại trải nghiệm tuyệt vời cho sinh viên và giáo viên.
                    </p>
                    <div className="mt-10">
                        <button 
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('danh-sach-sach')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="inline-block px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-bold transition-all duration-300 shadow-xl hover:shadow-indigo-500/30 hover:-translate-y-1 cursor-pointer"
                        >
                            Bắt đầu tìm sách ngay ↓
                        </button>
                    </div>
                </div>
            </section>

            <main id="danh-sach-sach" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-7xl mx-auto px-4 py-8 mb-12 flex-grow">
                {dataProduct?.map((item) => (
                    <CardBody key={item.id} data={item} />
                ))}
            </main>

            {/* Rules Section */}
            <section id="quy-dinh" className="bg-white py-16 border-t border-slate-200">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight">
                            NỘI QUY THƯ VIỆN
                        </h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Column 1 */}
                        <div className="space-y-6">
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-blue-100 hover:-translate-y-1 transition-all duration-300">
                                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                                    <span className="bg-blue-100 text-blue-600 w-9 h-9 rounded-full flex items-center justify-center mr-4 text-base shadow-sm">1</span>
                                    Điều kiện mượn sách
                                </h3>
                                <ul className="list-disc list-inside text-slate-600 space-y-2.5 text-base leading-relaxed ml-2 font-medium">
                                    <li>Người dùng phải có tài khoản đã đăng ký trên hệ thống.</li>
                                    <li>Người dùng phải đăng kí thẻ sinh viên.</li>
                                </ul>
                            </div>
                            
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-blue-100 hover:-translate-y-1 transition-all duration-300">
                                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                                    <span className="bg-blue-100 text-blue-600 w-9 h-9 rounded-full flex items-center justify-center mr-4 text-base shadow-sm">2</span>
                                    Thời hạn mượn
                                </h3>
                                <ul className="list-disc list-inside text-slate-600 space-y-2.5 text-base leading-relaxed ml-2 font-medium">
                                    <li><span className="font-bold text-slate-700">Thời gian mượn:</span> không quá 1 tháng.</li>
                                    <li><span className="font-bold text-slate-700">Gia hạn:</span> 1 lần, thêm 7 ngày (thực hiện trên trang web).</li>
                                    <li><span className="font-bold text-rose-600">Quá hạn:</span> hệ thống tự động tính phạt 2.000 VNĐ/cuốn/ngày.</li>
                                </ul>
                            </div>

                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-blue-100 hover:-translate-y-1 transition-all duration-300">
                                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                                    <span className="bg-blue-100 text-blue-600 w-9 h-9 rounded-full flex items-center justify-center mr-4 text-base shadow-sm">3</span>
                                    Xử lý sách hư hỏng, mất
                                </h3>
                                <p className="text-slate-600 text-base leading-relaxed pl-2 font-medium">
                                    Sách bị hư hỏng hoặc mất: bồi thường <span className="font-bold text-rose-600">100%</span> giá bìa hoặc thay thế bản mới cùng loại.
                                </p>
                            </div>
                        </div>

                        {/* Column 2 */}
                        <div className="space-y-6">
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-blue-100 hover:-translate-y-1 transition-all duration-300">
                                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                                    <span className="bg-blue-100 text-blue-600 w-9 h-9 rounded-full flex items-center justify-center mr-4 text-base shadow-sm">4</span>
                                    Tra cứu và mượn sách
                                </h3>
                                <ul className="list-disc list-inside text-slate-600 space-y-2.5 text-base leading-relaxed ml-2 font-medium">
                                    <li>Tra cứu sách trực tuyến qua thanh tìm kiếm trên trang web.</li>
                                    <li>Có thể đặt giữ sách trước khi đến thư viện nhận.</li>
                                </ul>
                            </div>

                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-blue-100 hover:-translate-y-1 transition-all duration-300">
                                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                                    <span className="bg-blue-100 text-blue-600 w-9 h-9 rounded-full flex items-center justify-center mr-4 text-base shadow-sm">5</span>
                                    Trách nhiệm người dùng
                                </h3>
                                <ul className="list-disc list-inside text-slate-600 space-y-2.5 text-base leading-relaxed ml-2 font-medium">
                                    <li>Kiểm tra tình trạng sách trước khi nhận.</li>
                                    <li>Trả sách đúng hạn để tránh bị khóa quyền mượn tạm thời.</li>
                                    <li>Không chia sẻ tài khoản cho người khác.</li>
                                </ul>
                            </div>

                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-blue-100 hover:-translate-y-1 transition-all duration-300">
                                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                                    <span className="bg-blue-100 text-blue-600 w-9 h-9 rounded-full flex items-center justify-center mr-4 text-base shadow-sm">6</span>
                                    Xử lý vi phạm
                                </h3>
                                <ul className="list-disc list-inside text-slate-600 space-y-2.5 text-base leading-relaxed ml-2 font-medium">
                                    <li>Vi phạm quá hạn từ 3 lần trở lên: <span className="font-bold text-rose-600">tạm khóa mượn sách 30 ngày.</span></li>
                                    <li>Cố tình làm hỏng, mất sách: xử lý theo quy định và ghi nhận vào hệ thống.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer id="lien-he">
                <Footer />
            </footer>
        </div>
    );
}

export default App;
