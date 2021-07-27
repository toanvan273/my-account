import React from 'react'
import dash from '../statics/img/dashboard.png'
export default function Home (){
    return (
        <div className="home-page mt-3" id="homePage">
            <div className="container">
                <div className="row border-wrap">
                    <div className="col-4 img-wrap d-flex">
                        <img src={dash} className="w-100"/>
                    </div>
                    <div className="col-8">
                        <div className="flow-content">
                            <i>Chào mừng bạn Trương Văn Toàn đến với nền tảng quản lý tài sản cá nhân iVND</i>
                            <p>
                            Kiến tạo con đường hướng tới sức khỏe tài chính và an tâm đầu tư là điều tất cả chúng ta đều có thể làm được. Quản lý tài chính cá nhân là một kĩ năng thiết yếu giúp bạn thành công trong mọi lĩnh vực. VNDIRECT giới thiệu hệ sinh thái đầu tư bao gồm các gói dịch vụ và danh mục tài sản đa dạng, giúp bạn kiến tạo thu nhập bền vững từ đầu tư. Tiết kiệm đầu tư là một quá trình tự tích lũy kinh nghiệm và kiến thức, chia nhỏ mục tiêu và lập kế hoạch thực hiện một cách liên tục và có kỉ luật. Đội ngũ chuyên gia của VNDIRECT sẽ giúp bạn
                            </p>
                            <h4>
                            PHÁT TRIỂN NĂNG LỰC ĐẦU TƯ - LỰA CHỌN DANH MỤC AN TOÀN BỀN VỮNG - QUẢN LÝ TÀI SẢN HIỆU QUẢ
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-6 position-relative">
                        <div className="branch-wrap">
                            <span className="orange-w">DGO</span>
                        </div>
                        <div className="content-wrap border-wrap">
                            <h4 className="orange-w">DỊCH VỤ TƯ VẤN ĐẦU TƯ & QUẢN LÝ TÀI SẢN</h4>
                            <p>(dành cho KH có nhu cầu tư vấn đầu tư và giám hộ quản lý tài sản/ Khách hàng mới chưa có kinh nghiệm)</p>
                            <ul>
                                <li>DGO - Hưu trí</li>
                                <li>DGO - Tích sản  (VNDAF - SIP)</li>
                                <li>DGO - Tích sản  (VNDAF - SIP)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-6 position-relative">
                        <div className="branch-wrap">
                            <span className="orange-w">DA</span>
                        </div>
                        <div className="content-wrap border-wrap">
                            <h4>DỊCH VỤ GIAO DỊCH CHỨNG KHOÁN</h4>
                            <ul>
                                <li>DAS - Tài khoản giao dịch chủ động (dành cho KH cần bảo mật thông tin)</li>
                                <li>DAC - Tài khoản tư vấn (dành cho KH cần hỗ trợ dịch vụ)</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-6 position-relative">
                        <div className="branch-wrap">
                            <span className="orange-w">DA</span>
                        </div>
                        <div className="content-wrap border-wrap">
                            <h4>DỊCH VỤ GIAO DỊCH CHỨNG KHOÁN</h4>
                            <ul>
                                <li>DAS - Tài khoản giao dịch chủ động (dành cho KH cần bảo mật thông tin)</li>
                                <li>DAC - Tài khoản tư vấn (dành cho KH cần hỗ trợ dịch vụ)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-6 position-relative">
                        <div className="branch-wrap">
                            <span className="orange-w">DA</span>
                        </div>
                        <div className="content-wrap border-wrap">
                            <h4>DỊCH VỤ GIAO DỊCH CHỨNG KHOÁN</h4>
                            <ul>
                                <li>DAS - Tài khoản giao dịch chủ động (dành cho KH cần bảo mật thông tin)</li>
                                <li>DAC - Tài khoản tư vấn (dành cho KH cần hỗ trợ dịch vụ)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    )
}