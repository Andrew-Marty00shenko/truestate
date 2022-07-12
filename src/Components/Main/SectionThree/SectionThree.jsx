import { Table } from "react-bootstrap";

import "./SectionThree.scss";

const SectionThree = () => {
    const tableInfo = [
        {
            id: 1,
            rowName: 'Поиск объекта',
            rowFirstColumn: `2-6 месяцев`,
            rowSecondColumn: `моментально, объекты уже отобраны командой специалистов`,
        },
        {
            id: 2,
            rowName: 'Процесс покупки',
            rowFirstColumn: `до нескольких месяцев`,
            rowSecondColumn: `в несколько кликов`,
        },
        {
            id: 3,
            rowName: 'Расходы',
            rowFirstColumn: `  нотариус, налог на покупку, страховки и сборы`,
            rowSecondColumn: `только комиссия сети (цена транзакции)`,
        },
        {
            id: 4,
            rowName: 'Ремонт',
            rowFirstColumn: `длительный процесс, требующий контроля и опыта`,
            rowSecondColumn: `берет на себя TRUESTATE`,
        },
        {
            id: 5,
            rowName: 'Процесс перепродажи',
            rowFirstColumn: `длительный процесс, требующий контроля и личного присутствия`,
            rowSecondColumn: `берет на себя TRUESTATE`,
        },
        {
            id: 6,
            rowName: 'Минимальные инвестиции',
            rowFirstColumn: `от €100.000`,
            rowSecondColumn: `от €100`,
        }
    ];

    return <section className="section-three">
        <h1>
            Самостоятельные инвестиции VS <br />
            <span>инвестиции с TRUESTATE</span>
        </h1>
        <Table className="section-three__table-desktop">
            <tbody>
                <tr className="head__table">
                    <td> </td>
                    <td>Самостоятельно</td>
                    <td>С TRUESTATE</td>
                </tr>
                {tableInfo.map((info) => {
                    return <tr className="table__row" key={info.id}>
                        <td>
                            {info.rowName}
                        </td>
                        <td>{info.rowFirstColumn}</td>
                        <td>{info.rowSecondColumn}</td>
                    </tr>
                })}
            </tbody>
        </Table>
        <Table className="section-three__table-mobile">
            <tbody>
                <tr className="head__table">
                    <td>Самостоятельно</td>
                    <td>С TRUESTATE</td>
                </tr>
                {tableInfo.map((info) => {
                    return <>
                        <tr className="table__col">
                            <td colSpan="2">
                                {info.rowName}
                            </td>
                        </tr>
                        <tr className="table__row" key={info.id}>
                            <td>{info.rowFirstColumn}</td>
                            <td>{info.rowSecondColumn}</td>
                        </tr>
                    </>
                })}
            </tbody>
        </Table>
        <p>
            TRUESTATE пришли, чтобы изменить рынок <br />
            инвестиций в недвижимость с помощью <br />
            <span> криптовалюты!</span>
        </p>
    </section >
}

export default SectionThree;