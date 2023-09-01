import React from 'react'
import * as Card from './Card'
import { Group } from '../models'

export interface GroupCardProps {
  group: Group
  handlePopup: (groupID: string) => void
}

export const GroupCard: React.FC<GroupCardProps> = ({ group, handlePopup }) => {
  return (
    <Card.Root className="w-[320px]" rounded="lg">
      {group.mediaUrl ? (
        <img
          src={group.mediaUrl}
          alt={group.name}
          className="relative h-32 w-full object-cover object-center"
        />
      ) : (
        <div className="relative h-32 w-full bg-rose-950" />
      )}
      <Card.Content>
        <div className="mb-4 flex flex-row justify-between">
          {/* Header */}
          <div>
            <div className="text-xl font-bold">{group.name}</div>
            <p
              className="mb-2 text-sm text-dark-secondary-content"
              aria-label="Owned by"
            >
              Owned by {group.owner}
            </p>
            <div className="flex flex-row flex-wrap gap-2">
              <span
                className="rounded-md bg-dark-base-200 px-2 py-1 text-xs font-medium text-dark-secondary-content"
                aria-label="Members count"
              >
                <span className="text-white">{group.memberCount}</span> members
              </span>
            </div>
          </div>
          <div>
            {group.type === 'public' && (
              <span className="text-text-dark-secondary-content rounded-full bg-dark-secondary px-2 py-1 text-xs font-medium">
                Public
              </span>
            )}
            {group.type === 'private' && (
              <span className="text-text-dark-secondary-content rounded-full bg-dark-secondary px-2 py-1 text-xs font-medium">
                Private
              </span>
            )}
          </div>
        </div>
        {/*  Membership Criteria */}
        <div className="text-center">
          <p
            className="mb-2 border border-solid border-current text-sm text-dark-secondary-content"
            aria-label="Membership criteria"
          >
            Membership criteria
          </p>
          <ul>
            <li className="pl-4">
              <span
                className="px-2 py-1 text-xs font-medium text-dark-secondary-content"
                aria-label="Minimum Account age"
              >
                Minimum Account age: {group.requirements?.minimumAccountAge}{' '}
              </span>
            </li>
            <li className="pl-4">
              <span
                className="px-2 py-1 text-xs font-medium text-dark-secondary-content"
                aria-label="Minimum Followers"
              >
                Minimum Followers: {group.requirements?.minimumFollowers}
              </span>
            </li>
            <li className="pl-4">
              <span
                className="px-2 py-1 text-xs font-medium text-dark-secondary-content"
                aria-label="Minimum $US Followers"
              >
                Minimum $US Followers: {group.requirements?.minimumUSFollowers}
              </span>
            </li>
          </ul>
        </div>
      </Card.Content>
      <Card.Actions>
        <div className="mr-auto text-dark-secondary-content">
          {group.currency}
          {group.price}/{group.periodically}
        </div>
        <div>
          {group.type === 'public' ? (
            <button className="cursor-pointer rounded-md bg-dark-primary px-4 py-2 text-sm font-semibold text-white opacity-100 shadow-sm hover:opacity-75">
              Join
            </button>
          ) : (
            <button
              className="cursor-pointer rounded-md bg-dark-primary px-4 py-2 text-sm font-semibold text-white opacity-100 shadow-sm hover:opacity-75"
              onClick={() => handlePopup(group.id)}
            >
              Apply
            </button>
          )}
        </div>
      </Card.Actions>
    </Card.Root>
  )
}
