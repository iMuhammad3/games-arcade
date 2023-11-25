import React from 'react'
import { Rock } from '../../../components/svgs/Rock'
import { Scissors } from '../../../components/svgs/Scissors'
import { Paper } from '../../../components/svgs/Paper'

export const useSVG = (name) => {
    switch(name.toLowerCase()){
        case "rock" : return <Rock />
        case "scissors" : return <Scissors />
        case "paper" : return <Paper />
    }
}
