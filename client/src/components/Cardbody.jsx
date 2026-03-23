import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faUser, faCalendar, faLanguage, faBoxes, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import ModalBuyBook from '../components/ModalBuyBook';
import { useState } from 'react';

function CardBody({ data }) {
    const [visible, setVisible] = useState(false);
    const [bookData, setBookData] = useState({});

    const showModal = async (data) => {
        setBookData(data);
        setVisible(true);
    };

    const onCancel = () => {
        setVisible(false);
    };

    return (
        <div className="h-full bg-white rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-2xl hover:border-blue-300 transition-all duration-500 overflow-hidden group relative flex flex-col hover:-translate-y-1">
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>
            {/* Ảnh sách */}
            <Link to={`/product/${data.id}`}>
                <div className="relative overflow-hidden aspect-[3/4] bg-slate-50 border-b border-slate-100">
                    <img
                        src={`${import.meta.env.VITE_API_URL_IMAGE}/${data.image}`}
                        className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500 p-2"
                        alt={data.nameProduct}
                    />
                    {/* Stock badge */}
                    <div className="absolute top-3 right-3">
                        <span
                            className={`px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg backdrop-blur-sm ${
                                data.stock > 0
                                    ? 'bg-gradient-to-r from-emerald-400 to-green-500 text-white border border-emerald-300/50'
                                    : 'bg-gradient-to-r from-red-400 to-pink-500 text-white border border-red-300/50'
                            }`}
                        >
                            {data.stock > 0 ? `✨ Còn ${data.stock} quyển` : '❌ Hết hàng'}
                        </span>
                    </div>
                    {/* Cover type badge */}
                    <div className="absolute top-3 left-3">
                        <span
                            className={`px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg backdrop-blur-sm ${
                                data.covertType === 'hard'
                                    ? 'bg-gradient-to-r from-blue-400 to-indigo-500 text-white border border-blue-300/50'
                                    : 'bg-gradient-to-r from-orange-400 to-amber-500 text-white border border-orange-300/50'
                            }`}
                        >
                            {data.covertType === 'hard' ? '📘 Bìa cứng' : '📙 Bìa mềm'}
                        </span>
                    </div>
                </div>
            </Link>

            <div className="p-5 flex flex-col flex-grow relative z-10">
                {/* Tên sách */}
                <Link to={`/product/${data.id}`}>
                    <h6 className="text-slate-800 font-bold mb-4 text-base leading-snug group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:bg-clip-text transition-all duration-300 line-clamp-2">
                        {data.nameProduct}
                    </h6>
                </Link>

                {/* Thông tin chi tiết */}
                <div className="space-y-3 mb-6 flex-grow">
                    {/* Nhà xuất bản */}
                    <div className="flex items-center text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100 group-hover:bg-blue-50/50 group-hover:border-blue-100/50 transition-colors">
                        <FontAwesomeIcon icon={faUser} className="mr-2 w-3 text-blue-500/70" />
                        <span className="truncate font-medium">{data.publisher}</span>
                    </div>

                    {/* Công ty phát hành */}
                    {data.publishingCompany && (
                        <div className="flex items-center text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100 group-hover:bg-purple-50/50 group-hover:border-purple-100/50 transition-colors">
                            <FontAwesomeIcon icon={faBuilding} className="mr-2 w-3 text-purple-500/70" />
                            <span className="truncate font-medium">{data.publishingCompany}</span>
                        </div>
                    )}

                    {/* Số trang và năm xuất bản */}
                    <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center bg-gradient-to-r from-green-50 to-emerald-50 px-2 py-1.5 rounded-lg border border-green-100/50">
                            <FontAwesomeIcon icon={faBookOpen} className="mr-1 w-3 text-green-500" />
                            <span className="text-gray-600 font-medium">{data.pages} trang</span>
                        </div>
                        <div className="flex items-center bg-gradient-to-r from-orange-50 to-amber-50 px-2 py-1.5 rounded-lg border border-orange-100/50">
                            <FontAwesomeIcon icon={faCalendar} className="mr-1 w-3 text-orange-500" />
                            <span className="text-gray-600 font-medium">{data.publishYear}</span>
                        </div>
                    </div>

                    {/* Ngôn ngữ */}
                    {data.language && (
                        <div className="flex items-center text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100 transition-colors">
                            <FontAwesomeIcon icon={faLanguage} className="mr-2 w-3 text-teal-500/70" />
                            <span className="font-medium">{data.language}</span>
                        </div>
                    )}
                </div>

                {/* Nút hành động */}
                <div className="mt-auto">
                    <button
                        onClick={() => showModal(data)}
                        disabled={data.stock <= 0}
                        className={`w-full py-3 px-4 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 transform active:scale-95 ${
                            data.stock > 0
                                ? 'bg-slate-900 hover:bg-blue-600 text-white shadow-md hover:shadow-xl border border-transparent'
                                : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                        }`}
                    >
                        {data.stock > 0 ? '📚 Mượn ngay' : '❌ Hết hàng'}
                    </button>
                </div>
            </div>
            <ModalBuyBook visible={visible} onCancel={onCancel} bookData={bookData} />
        </div>
    );
}

export default CardBody;
