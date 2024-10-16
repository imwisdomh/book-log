const startIncrementing = (setCurrentPage, intervalRef, totalPages) => {
    if (!intervalRef.current) {
        intervalRef.current = setInterval(() => {
            setCurrentPage((prevPage) => String(Math.min(parseInt(prevPage) + 1, totalPages)));
        }, 40);
    }
};

const startDecrementing = (setCurrentPage, intervalRef) => {
    if (!intervalRef.current) {
        intervalRef.current = setInterval(() => {
            setCurrentPage((prevPage) => String(Math.max(parseInt(prevPage) - 1, 0)));
        }, 40);
    }
};

const stopChangingPage = (intervalRef) => {
    if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    }
};

const handlePageChange = (input, totalPages, setCurrentPage) => {
    const pageNumber = parseInt(input);
    if (!isNaN(pageNumber) && pageNumber >= 0 && pageNumber <= totalPages) {
        setCurrentPage(String(pageNumber));
    } else if (input === "") {
        setCurrentPage("0");
    }
};

const handleTotalPagesChange = (input, setTotalPages) => {
    const pageNumber = parseInt(input);
    if (!isNaN(pageNumber) && pageNumber >= 0) {
        setTotalPages(pageNumber);
    } else if (input === "") {
        setTotalPages("0");
    }
};

export { startIncrementing, startDecrementing, stopChangingPage, handlePageChange, handleTotalPagesChange };
