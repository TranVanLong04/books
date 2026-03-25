import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../hooks/useStore';
import { Dropdown, Avatar, Button } from 'antd';
import { UserOutlined, LogoutOutlined, SettingOutlined, HistoryOutlined, SendOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import useDebounce from '../hooks/useDebounce';
import { requestLogout, requestSearchProduct } from '../config/request';
import logo from '../assets/images/logo.webp';

function Header() {
    const { dataUser } = useStore();
    const navigate = useNavigate();

    const [valueSearch, setValueSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isResultVisible, setIsResultVisible] = useState(false);

    const debounce = useDebounce(valueSearch, 500);

    const handleLogout = async () => {
        try {
            await requestLogout();
            navigate('/');
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        } catch (error) {
            console.error('Failed to logout:', error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            if (!debounce.trim()) {
                setSearchResults([]);
                setIsResultVisible(false);
                return;
            }
            try {
                const res = await requestSearchProduct(debounce);
                setSearchResults(res.metadata);
                setIsResultVisible(res.metadata.length > 0);
            } catch (error) {
                console.error('Failed to search for products:', error);
                setSearchResults([]);
                setIsResultVisible(false);
            }
        };
        fetchData();
    }, [debounce]);

    return (
        <div className="bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/50 w-full transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo */}
                    <Link to={'/'}>
                        <div className="flex items-center group">
                            <div className="flex-shrink-0 transition-transform group-hover:scale-105 duration-300">
                                <img src={logo} alt="Thư Viện Logo" className="h-10 sm:h-12 w-auto object-contain drop-shadow-sm" />
                            </div>
                        </div>
                    </Link>

                    {/* Navigation Menu */}
                    <nav className="hidden lg:flex items-center space-x-8 ml-10">
                        <a 
                            href="/#danh-sach-sach" 
                            onClick={(e) => {
                                if (window.location.pathname === '/') {
                                    e.preventDefault();
                                    document.getElementById('danh-sach-sach')?.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            className="text-slate-600 hover:text-blue-600 font-bold transition-colors text-base cursor-pointer"
                        >
                            Mượn sách
                        </a>
                        <a 
                            href="/#quy-dinh"
                            onClick={(e) => {
                                if (window.location.pathname === '/') {
                                    e.preventDefault();
                                    document.getElementById('quy-dinh')?.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            className="text-slate-600 hover:text-blue-600 font-bold transition-colors text-base cursor-pointer"
                        >
                            Quy định
                        </a>
                        <a 
                            href="/#lien-he"
                            onClick={(e) => {
                                if (window.location.pathname === '/') {
                                    e.preventDefault();
                                    document.getElementById('lien-he')?.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            className="text-slate-600 hover:text-blue-600 font-bold transition-colors text-base cursor-pointer"
                        >
                            Liên hệ
                        </a>
                    </nav>

                    {/* Search Bar */}
                    <div className="flex-1 max-w-md xl:max-w-lg mx-6 relative">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg
                                    className="h-5 w-5 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </div>
                            <input
                                type="text"
                                value={valueSearch}
                                onChange={(e) => setValueSearch(e.target.value)}
                                onFocus={() => setIsResultVisible(true)}
                                onBlur={() => setTimeout(() => setIsResultVisible(false), 200)} // Delay to allow click on results
                                placeholder="Tìm kiếm sách, tác giả..."
                                className="block w-full pl-10 pr-3 py-2 sm:py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 focus:bg-white transition-all duration-300 shadow-inner"
                            />
                        </div>
                        {isResultVisible && searchResults.length > 0 && (
                            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
                                <ul className="max-h-80 overflow-y-auto">
                                    {searchResults.map((product) => (
                                        <li key={product.id}>
                                            <Link
                                                to={`/product/${product.id}`}
                                                className="flex items-center p-3 hover:bg-gray-100 transition-colors"
                                            >
                                                <img
                                                    src={`${import.meta.env.VITE_API_URL_IMAGE}/${product.image}`}
                                                    alt={product.nameProduct}
                                                    className="w-12 h-16 object-cover rounded-md mr-4"
                                                />
                                                <div>
                                                    <p className="font-semibold text-gray-800">{product.nameProduct}</p>
                                                    <p className="text-sm text-gray-500">{product.publisher}</p>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Auth Buttons / User Info */}
                    <div className="flex items-center space-x-4">
                        {dataUser && dataUser.id ? (
                            // User Info Dropdown
                            <Dropdown
                                menu={{
                                    items: [
                                        {
                                            key: 'profile',
                                            icon: <UserOutlined />,
                                            label: 'Thông tin cá nhân',
                                            onClick: () => navigate('/infoUser'),
                                        },
                                        {
                                            key: 'settings',
                                            icon: <HistoryOutlined />,
                                            label: 'Lịch sử mượn sách',
                                            onClick: () => navigate('/infoUser'),
                                        },
                                        {
                                            key: 'settings2',
                                            icon: <SendOutlined />,
                                            label: 'Gửi yêu cầu cấp mã sinh viên',
                                            onClick: () => navigate('/infoUser'),
                                        },
                                        {
                                            type: 'divider',
                                        },
                                        {
                                            key: 'logout',
                                            icon: <LogoutOutlined />,
                                            label: 'Đăng xuất',
                                            danger: true,
                                            onClick: () => handleLogout(),
                                        },
                                    ],
                                }}
                                placement="bottomRight"
                                arrow
                            >
                                <div className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors">
                                    <Avatar
                                        size={32}
                                        icon={<UserOutlined />}
                                        src={dataUser.avatar}
                                        className="bg-blue-600"
                                    />
                                    <div className="hidden sm:block">
                                        <p className="text-sm font-medium text-gray-900">
                                            {dataUser.fullName || 'Người dùng'}
                                        </p>
                                        <p className="text-xs text-gray-500">{dataUser.email}</p>
                                    </div>
                                </div>
                            </Dropdown>
                        ) : (
                            // Login/Register Buttons
                            <>
                                <Link to={'/login'}>
                                    <Button type="text" className="text-slate-600 hover:text-blue-600 font-medium transition-colors px-4 rounded-xl">
                                        Đăng nhập
                                    </Button>
                                </Link>
                                <Link to={'/register'}>
                                    <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-5 py-2 sm:py-2.5 rounded-xl text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                                        Đăng ký
                                    </button>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
