import EliteHero from '@/component/Elite/EliteHero'
import EliteOverview from '@/component/Elite/EliteOverview'
import EliteSyllabusContent from '@/component/Elite/EliteSyllabusContent'
import React from 'react'

const EpicProgram = () => {
  return (
    <div className='relative pb-[100px] '>
        <EliteHero />
        <EliteOverview />
        <EliteSyllabusContent />
    </div>
  )
}

export default EpicProgram