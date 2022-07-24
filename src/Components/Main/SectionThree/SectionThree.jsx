import { Table } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Element } from "react-scroll";

import "./SectionThree.scss";

const SectionThree = () => {
    const { t } = useTranslation();

    const tableInfo = [
        {
            id: 1,
            rowName: t('landing:SECTION_THREE_TABLE_COLUMN_NAME_1'),
            rowFirstColumn: t('landing:SECTION_THREE_TABLE_COLUMN_1_TEXT_1'),
            rowSecondColumn: t('landing:SECTION_THREE_TABLE_COLUMN_2_TEXT_1')
        },
        {
            id: 2,
            rowName: t('landing:SECTION_THREE_TABLE_COLUMN_NAME_2'),
            rowFirstColumn: t('landing:SECTION_THREE_TABLE_COLUMN_1_TEXT_2'),
            rowSecondColumn: t('landing:SECTION_THREE_TABLE_COLUMN_2_TEXT_2')
        },
        {
            id: 3,
            rowName: t('landing:SECTION_THREE_TABLE_COLUMN_NAME_3'),
            rowFirstColumn: t('landing:SECTION_THREE_TABLE_COLUMN_1_TEXT_3'),
            rowSecondColumn: t('landing:SECTION_THREE_TABLE_COLUMN_2_TEXT_3')
        },
        {
            id: 4,
            rowName: t('landing:SECTION_THREE_TABLE_COLUMN_NAME_4'),
            rowFirstColumn: t('landing:SECTION_THREE_TABLE_COLUMN_1_TEXT_4'),
            rowSecondColumn: t('landing:SECTION_THREE_TABLE_COLUMN_2_TEXT_4')
        },
        {
            id: 5,
            rowName: t('landing:SECTION_THREE_TABLE_COLUMN_NAME_5'),
            rowFirstColumn: t('landing:SECTION_THREE_TABLE_COLUMN_1_TEXT_5'),
            rowSecondColumn: t('landing:SECTION_THREE_TABLE_COLUMN_2_TEXT_5')
        },
        {
            id: 6,
            rowName: t('landing:SECTION_THREE_TABLE_COLUMN_NAME_6'),
            rowFirstColumn: t('landing:SECTION_THREE_TABLE_COLUMN_1_TEXT_6'),
            rowSecondColumn: t('landing:SECTION_THREE_TABLE_COLUMN_2_TEXT_6')
        }
    ];

    return <section className="section-three">
        <Element name="benefits" />
        <h1>
            {t('landing:SECTION_THREE_TITLE_WORD_1')} <br />
            <span>{t('landing:SECTION_THREE_TITLE_WORD_2')}</span>
        </h1>
        <Table className="section-three__table-desktop">
            <tbody>
                <tr className="head__table">
                    <td> </td>
                    <td>{t('landing:SECTION_THREE_TABLE_HEADER_1')}</td>
                    <td>{t('landing:SECTION_THREE_TABLE_HEADER_2')}</td>
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
                    <td>{t('landing:SECTION_THREE_TABLE_HEADER_1')}</td>
                    <td>{t('landing:SECTION_THREE_TABLE_HEADER_2')}</td>
                </tr>
                {tableInfo.map((info) => {
                    return <>
                        <tr className="table__col" >
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
            {t('landing:SECTION_THREE_BOTTOM_TEXT_1')} <br />
            {t('landing:SECTION_THREE_BOTTOM_TEXT_2')} <br />
            <span>  {t('landing:SECTION_THREE_BOTTOM_TEXT_3')}</span>
        </p>
    </section >
}

export default SectionThree;