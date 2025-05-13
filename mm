

  .wave img {
    width: 100%;
    display: block;
  }

  .program-section {
    background-color: #1f56db;
    padding: 40px 20px;
    text-align: center;
    color: white;
  }

  .section-title {
    display: inline-block;
    background-color: #000;
    padding: 10px 20px;
    color: white;
    font-weight: bold;
    border-radius: 999px;
    margin: 30px 0 10px;
    font-size: 18px;
  }

  .section-title.green {
    background-color: #0aaa5f;
  }

  .grid-boxes-2col {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    max-width: 1000px;
    margin: 30px auto;
  }

  .grid-boxes-responsive {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 columns for top row */
    gap: 20px;
    margin-top: 30px;
  }

  .grid-boxes-responsive-bottom {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* 2 columns for bottom row */
    gap: 20px;
    margin-top: 30px;
  }

  .box {
    background-color: #0a2e83;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 16px 17px 0 #000, 0 8px 0 #000; /* Right and bottom for 3D */
    transition: transform 0.3s ease;
    height: 320px; /* Increased height */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .box:hover {
    transform: scale(1.03);
  }

  .box img {
    width: 100%;
    height: auto;
    display: block;
  }

  .box p {
    padding: 20px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    margin: 0;
  }

  @media (max-width: 768px) {
    .grid-boxes-2col {
      grid-template-columns: 1fr;
    }

    .grid-boxes-responsive {
      grid-template-columns: repeat(2, 1fr); /* 2 columns on smaller screens */
    }

    .grid-boxes-responsive-bottom {
      grid-template-columns: 1fr; /* Single column for bottom row on mobile */
    }
  }
