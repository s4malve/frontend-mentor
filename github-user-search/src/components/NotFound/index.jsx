import { memo } from 'react'

import bgOctocat from '../../public/404-octocat.png'
import bgOctocatShadow from '../../public/404-octocat-shadow.png'
import bgPlane from '../../public/404-plane.png'

const NotFound = ({ username, error }) => {
  return (
    <div className="w-full min-h-[60vh] bg-404-bg bg-no-repeat relative overflow-hidden rounded-lg">
      <div className="absolute top-24 left-72 z-30">
        <img src={bgOctocat} alt="octocat" className="relative z-30" />
        <img
          src={bgOctocatShadow}
          alt=""
          className="relative right-0 left-0 mx-auto bottom-8 z-20"
        />
      </div>
      <img
        src={bgPlane}
        alt="start wars plane"
        className="absolute top-24 -right-28 z-10"
      />
      <div className="absolute top-0 bottom-0 flex flex-col justify-center items-center left-10">
        <h2 className="font-bold text-8xl">404</h2>
        <p className="text-xl text-[#305D78] bg-slate-100 p-3 rounded-lg">
          <span className="font-bold">{username}</span> was not found. <br />
          Try another username.
        </p>
      </div>
    </div>
  )
}

export default memo(NotFound)
