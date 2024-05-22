import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

import "/Users/macbook/my-app/src/Home/Student/Post/Posta.css"
export const Posta = ({ texte, timestamp, user }) => {
    return (
        <div className="posta-container">
            <div className="posta-content">
                <div className="posta-header">
                    <img
                        className="profile-img"
                        src={user}
                        width={40}
                        height={40}
                        alt=""
                    />
                    <div>
                        <p className="user-name">{user}</p>
                        <p className="timestamp">{timestamp}</p>
                    </div>
                </div>
                <p className="post-text">{texte}</p>
            </div>
            <div className="posta-footer">
                <div className="footer-item">
                    <p className="footer-text">Apply 1</p>
                </div>
                <div className="footer-item">
                    
                    <p className="footer-text">Apply 2</p>
                </div>
            </div>
        </div>
    );
};

