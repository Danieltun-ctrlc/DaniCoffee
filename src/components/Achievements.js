import React, { useState } from "react";
import achievementsData from "../data/achievementsData";
import FadeInSection from "./FadeInSection";
import { motion, AnimatePresence } from "framer-motion";
import "../css/Achievements.css";

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    zIndex: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    zIndex: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    zIndex: 0,
  }),
};

const SocialCard = ({ post }) => {
  const [[currentIndex, direction], setPage] = useState([0, 0]);
  const [showComments, setShowComments] = useState(false);

  const paginate = (newDirection) => {
    let nextIndex = currentIndex + newDirection;

    if (nextIndex < 0) nextIndex = post.images.length - 1;
    if (nextIndex >= post.images.length) nextIndex = 0;

    setPage([nextIndex, newDirection]);
  };

  const [dragStartX, setDragStartX] = useState(null);
  const [dragEndX, setDragEndX] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const minSwipeDistance = 50;

  const onDragStart = (e) => {
    const clientX = e.type.includes("mouse")
      ? e.clientX
      : e.targetTouches[0].clientX;
    setDragStartX(clientX);
    setIsDragging(true);
  };

  const onDragMove = (e) => {
    if (!isDragging) return;
    const clientX = e.type.includes("mouse")
      ? e.clientX
      : e.targetTouches[0].clientX;
    setDragEndX(clientX);
  };

  const onDragEnd = () => {
    if (!isDragging || !dragStartX || !dragEndX) {
      setIsDragging(false);
      return;
    }
    const distance = dragStartX - dragEndX;

    if (distance > minSwipeDistance) paginate(1);

    if (distance < -minSwipeDistance) paginate(-1);

    setIsDragging(false);
    setDragStartX(null);
    setDragEndX(null);
  };

  return (
    <div className="social-card">
      <div className="card-header">
        <div className="user-avatar-container">
          <img src={post.userImage} alt="Profile" className="user-avatar" />
        </div>
        <div className="user-info">
          <h4 className="user-username">{post.username}</h4>
          <span className="user-location">{post.location}</span>
        </div>
        <div
          style={{
            marginLeft: "auto",
            fontSize: "1.2rem",
            color: "var(--text-secondary)",
          }}
        >
          • • •
        </div>
      </div>

      <div
        className="card-image-container"
        onTouchStart={onDragStart}
        onTouchMove={onDragMove}
        onTouchEnd={onDragEnd}
        onMouseDown={onDragStart}
        onMouseMove={onDragMove}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentIndex}
            src={post.images[currentIndex]}
            alt="Post"
            className="post-img"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          />
        </AnimatePresence>

        {post.images.length > 1 && (
          <>
            <button
              className="carousel-btn btn-left"
              onClick={(e) => {
                e.stopPropagation();
                paginate(-1);
              }}
            >
              ‹
            </button>
            <button
              className="carousel-btn btn-right"
              onClick={(e) => {
                e.stopPropagation();
                paginate(1);
              }}
            >
              ›
            </button>

            <div className="carousel-dots">
              {post.images.map((_, idx) => (
                <div
                  key={idx}
                  className={`dot ${currentIndex === idx ? "active" : ""}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* 3. POST FOOTER */}
      <div className="post-footer">
        <div className="action-bar">
          <button className="icon-btn">
            <img
              src="/assets/heart.png"
              alt="Like"
              className="action-icon-img"
            />
          </button>
          <button
            className="icon-btn"
            onClick={() => setShowComments(!showComments)}
          >
            <img
              src="/assets/comment.png"
              alt="Comment"
              className="action-icon-img"
            />
          </button>
          <button className="icon-btn">
            <img
              src="/assets/share.png"
              alt="Share"
              className="action-icon-img"
            />
          </button>
          <button className="icon-btn" style={{ marginLeft: "auto" }}>
            <img
              src="/assets/pokeball.png"
              alt="Save"
              className="action-icon-img"
            />
          </button>
        </div>

        <div className="card-content">
          <span className="likes-line">{post.likes} likes</span>
          <div className="caption-block">
            <span className="caption-username">{post.username}</span>
            {post.caption}
          </div>
          <div className="tags-block">{post.tags.map((tag) => tag + " ")}</div>
        </div>

        {showComments && post.comments && post.comments.length > 0 && (
          <div className="comments-section">
            {post.comments.map((comment, idx) => (
              <div key={idx} className="comment-row">
                <span className="comment-user">{comment.user}</span>
                <span className="comment-text">{comment.text}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Achievements = () => {
  return (
    <div className="achievements-container">
      <div
        style={{
          gridColumn: "1 / -1",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        <FadeInSection>
          <h2
            style={{
              fontFamily: "Source Code Pro",
              color: "#cdd6f4",
              fontSize: "3rem",
              marginBottom: "10px",
            }}
          >
            Hall of Fame
          </h2>
          <p style={{ color: "var(--text-secondary)" }}>
            @myothettun_achievements
          </p>
        </FadeInSection>
      </div>

      {achievementsData.map((post) => (
        <FadeInSection key={post.id}>
          <SocialCard post={post} />
        </FadeInSection>
      ))}
    </div>
  );
};

export default Achievements;
