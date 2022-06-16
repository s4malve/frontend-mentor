import PropTypes from 'prop-types'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import Chain from '../icons/Chain'
import Company from '../icons/Company'

import Location from '../icons/Location'
import Twitter from '../icons/Twitter'

const ProfileCard = ({
  avatar_url,
  name,
  company,
  location,
  login,
  blog,
  bio,
  twitter_username,
  public_repos,
  followers,
  following,
  created_at,
  loading,
}) => {
  const transformDate = (date) =>
    new Date(date).toDateString().split(' ').slice(1).join(' ')

  const cardBanner = [
    {
      label: 'Repos',
      value: public_repos,
    },
    {
      label: 'Followers',
      value: followers,
    },
    {
      label: 'Following',
      value: following,
    },
  ]

  const cardInfo = [
    {
      label: Location,
      value: location,
    },
    {
      label: Chain,
      value: blog,
      href: blog,
    },
    {
      label: Twitter,
      value: twitter_username,
      href: twitter_username ? `https://twitter.com/${twitter_username}` : null,
    },
    {
      label: Company,
      value: company,
    },
  ]

  return (
    <SkeletonTheme baseColor="#334155" highlightColor="#475569">
      <section
        className={`rounded-lg px-6 py-8 bg-slate-200 dark:bg-slate-800 grid grid-rows-1 lg:grid-cols-[auto_1fr] gap-x-4`}
      >
        <aside className="w-32 rounded-full hidden lg:inline-block">
          {loading ? (
            <Skeleton circle height="128px" width="128px" />
          ) : (
            <img src={avatar_url} alt={`${name} profile`} className="avatar" />
          )}
        </aside>
        <div className="grid gap-y-6">
          <header className="grid grid-cols-[auto_1fr] w-full gap-x-4">
            {loading ? (
              <Skeleton
                circle
                width="80px"
                height="80px"
                containerClassName="lg:hidden"
              />
            ) : (
              <img
                src={avatar_url}
                alt={`${name} profile`}
                className="avatar w-20 lg:hidden"
              />
            )}
            <div className="grid grid-rows-2 lg:grid-cols-2 justify-between">
              <h2 className="font-bold text-xl">
                {name || <Skeleton width="100px" />}
              </h2>
              {loading ? (
                <Skeleton width="100%" />
              ) : (
                <a
                  href={`https://github.com/${login}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link lg:col-start-1"
                >
                  @{login}
                </a>
              )}
              {loading ? (
                <Skeleton />
              ) : (
                <span className="block lg:col-start-2 lg:row-start-1 lg:justify-self-end">
                  Joined{' '}
                  <time dateTime={new Date(created_at).toLocaleDateString()}>
                    {transformDate(created_at)}
                  </time>
                </span>
              )}
            </div>
          </header>
          <p>{loading ? <Skeleton /> : bio}</p>
          <ul className="bg-slate-100 dark:bg-slate-900 rounded-lg py-5 md:px-7">
            <div className="flex items-center justify-around w-full md:w-3/5 md:justify-between">
              {cardBanner.map(({ label, value }, index) => (
                <li
                  className="flex items-center flex-col gap-y-2 md:items-start"
                  key={index}
                >
                  <span className="text-sm">{label}</span>
                  <span className="text-lg font-bold">
                    {loading ? <Skeleton width="80px" /> : value}
                  </span>
                </li>
              ))}
            </div>
          </ul>
          <ul className="grid gap-y-2 md:gap-3 md:grid-cols-2 md:grid-rows-2">
            {cardInfo.map(({ label, value, href }, index) => {
              const Icon = label
              return loading ? (
                <Skeleton key={index} />
              ) : (
                <li
                  key={index}
                  className={`flex items-center gap-x-2 ${
                    !value && 'text-slate-100/50'
                  }`}
                >
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`link flex items-center gap-x-2 ${
                        !value && 'text-slate-100/50 link'
                      }`}
                    >
                      <Icon />
                      <span>{value || 'Not Avalible'}</span>
                    </a>
                  ) : (
                    <>
                      <Icon />
                      <span>{value || 'Not Avalible'}</span>
                    </>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </SkeletonTheme>
  )
}

ProfileCard.propTypes = {
  avatar_url: PropTypes.string,
  name: PropTypes.string,
  login: PropTypes.string,
  created_at: PropTypes.string,
  bio: PropTypes.string,
  location: PropTypes.string,
  twitter_username: PropTypes.string,
  company: PropTypes.string,
  public_repos: PropTypes.number,
  followers: PropTypes.number,
  following: PropTypes.number,
}

export default ProfileCard
