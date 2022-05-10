import React, {useEffect, useState} from 'react'


export default function Table({getFields}) {


    return (

            <table>
                <thead>
                <tr>
                    <th>Наименование</th>

                </tr>
                </thead>
                <tbody>
                <tr>
                    {getFields()}
                </tr>
                </tbody>
            </table>

    )
}