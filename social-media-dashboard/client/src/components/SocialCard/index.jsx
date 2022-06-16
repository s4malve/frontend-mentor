import PropTypes from 'prop-types'

import ArrowUp from '../Icon/ArrowUp'

const SocialCard = ({
  account: { logo, username, followers, name },
  rating: { count, size, positive },
}) => {
  return (
    <div
      className={`flex-col flex items-center justify-between gap-y-3 card relative before:w-full before:h-[4px] before:absolute before:top-0 overflow-hidden ${name}`}
    >
      <header className="flex items-center gap-x-2">
        <img src={logo} alt={`${name} logo`} className="w-5" />
        <p className="font-semibold">@{username}</p>
      </header>
      <div className="flex-col flex items-center">
        <h2 className="text-5xl card-title">{followers.value}</h2>
        <p className="text-sm tracking-[0.3rem] uppercase">{followers.name}</p>
      </div>
      <p className={`rating ${positive ? 'text-green-600' : 'text-red-600'}`}>
        <ArrowUp className={positive ? 'rotate-0' : 'rotate-180'} /> {count}{' '}
        {size}
      </p>
    </div>
  )
}

SocialCard.prototype = {
  account: PropTypes.shape({
    logo: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    followers: PropTypes.shape({
      value: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  }),
  rating: PropTypes.shape({
    count: PropTypes.number.isRequired,
    size: PropTypes.string.isRequired,
    positive: PropTypes.bool.isRequired,
  }).isRequired,
}

export default SocialCard
