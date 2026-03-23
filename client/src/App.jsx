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
            <section className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white py-14 px-4 shadow-inner relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
                <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
                
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
                        Khám Phá Tri Thức Cùng Thư Viện
                    </h2>
                    <p className="text-base md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed shadow-sm font-light">
                        Hệ thống quản lý thư viện hiện đại giúp bạn dễ dàng tìm kiếm, tra cứu và mượn sách trực tuyến. 
                        Nơi cung cấp nguồn tài liệu phong phú, giao diện thân thiện và quy trình nhanh chóng, mang lại trải nghiệm tuyệt vời cho sinh viên và giáo viên.
                    </p>
                    <div className="mt-8">
                        <span className="inline-block px-6 py-3 bg-white/20 hover:bg-white/30 text-white backdrop-blur-md rounded-full font-medium transition-all duration-300 cursor-pointer border border-white/20 shadow-lg hover:shadow-xl hover:-translate-y-1">
                            Bắt đầu tìm sách ngay ↓
                        </span>
                    </div>
                </div>
            </section>

            <main className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-7xl mx-auto px-4 py-8 mb-12 flex-grow">
                {dataProduct?.map((item) => (
                    <CardBody key={item.id} data={item} />
                ))}
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default App;
