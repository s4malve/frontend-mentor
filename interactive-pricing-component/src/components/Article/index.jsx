import { useState, useCallback } from 'react'

import Button from '../Button'
import Range from '../Range'
import ButtonSwitch from '../ButtonSwitch'

import checkIcon from '/icon-check.svg'

import { benefits } from '../../utils/collections'

const Article = () => {
  const [percentage, setPercentage] = useState(0),
    [billing, setBilling] = useState('month'),
    [price, setPrice] = useState(8),
    [viewers, setViewers] = useState('10k')

  const handleChange = useCallback((value) => {
    // This is like the value was 0%
    if (value === -2) {
      setViewers('10k')
      setPercentage(0)
      setPrice(8)
    }
    // This is like the value was 25%
    if (value === -1) {
      setViewers('50k')
      setPercentage(25)
      setPrice(12)
    }
    // This is like the value was 50%
    if (value === 0) {
      setViewers('100k')
      setPercentage(50)
      setPrice(16)
    }
    // This is like the value was 75%
    if (value === 1) {
      setViewers('500k')
      setPercentage(75)
      setPrice(20)
    }
    // This is like the value was 100%
    if (value === 2) {
      setViewers('1M')
      setPercentage(100)
      setPrice(24)
    }
  }, [])

  return (
    <article className="rounded-lg shadow-lg bg-stone-50">
      <header className="flex-col flex items-center pb-12 pt-6 px-6 gap-y-5">
        <div className="grid-cols-1 grid-rows-3 grid items-center w-full justify-items-center md:grid-cols-2 md:grid-rows-2 md:gap-y-5">
          <span className="font-semibold uppercase text-stone-400">
            {viewers} viewers
          </span>
          <div className="w-full md:row-start-2 md:col-start-1 md:col-end-3">
            <Range handleChange={handleChange} percentage={percentage} />
          </div>
          <span className="flex font-bold items-center text-stone-400 gap-x-2 md:col-start-2 md:row-start-1">
            <span className="text-4xl text-blue-900">
              ${billing === 'month' ? price : price * 12}.00
            </span>
            / {billing === 'month' ? 'month' : 'year'}
          </span>
        </div>
        <div className="capitalize flex items-center text-stone-400 gap-x-2">
          <span>monthly billing</span>
          <ButtonSwitch billing={billing} setBilling={setBilling} />
          <span>year billing </span>
          <span className="bg-orange-200/50 font-bold p-1 px-2 rounded-full text-orange-600 text-[12px]">
            -25%
          </span>
        </div>
      </header>
      <div className="border-t flex-col flex items-center pb-8 px-6 gap-y-5 border-stone-300 md:flex-row md:justify-between">
        <ul className="flex-col flex items-center mt-6 gap-y-2 text-stone-400">
          {benefits.map(({ title }) => (
            <li key={title} className="flex items-center gap-x-3">
              <img src={checkIcon} alt="" />
              <span>{title}</span>
            </li>
          ))}
        </ul>
        <Button>Start my trial</Button>
      </div>
    </article>
  )
}

export default Article
