function QuestionStatus({qno, isMarked, isCorrect=undefined}) {
    return (
        <div className={isCorrect === undefined ? isMarked? 'circle marked' : 'circle' : isCorrect? 'circle correct' : 'circle wrong'}>
            {qno}
        </div>
    )
}

export default QuestionStatus