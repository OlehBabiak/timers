// export default function ResultModal({ ref, result, targetTime }) {
//     return (
//         <dialog ref={ref} className="result-modal">
//             <h2>Your {result}</h2>
//             <p>The target time was <strong>{targetTime} seconds.</strong></p>
//             <p>You stopped the timer with <strong>X seconds left.</strong></p>
//             <form method="dialog">
//                 <button>Close</button>
//             </form>
//         </dialog>
//     );
// }

import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal({ remainingTime, targetTime, onReset }, ref) {
    const dialog = useRef();
    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal()
            }
        };
    });
    return (
        <dialog ref={dialog} className="result-modal">
            <h2>Your {userLost ? 'Lost' : 'Win'}</h2>
            <p>The target time was <strong>{targetTime} seconds.</strong></p>
            <p>You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong></p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>
    );
})

export default ResultModal;