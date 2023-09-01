import { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import { GroupCard } from '../components/GroupCard'
import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import { groups } from '../mocks/groupsMockData'
import { FormData } from '../models'
import '../styles/popup.css'

const wait = () => new Promise((resolve) => setTimeout(resolve, 500))

export const EngagePage = () => {
  const [visiblePopup, setVisiblePopup] = useState<boolean>(false)
  const [selectedGroupID, setSelectedGroupID] = useState<string>('')
  const [formData, setFormData] = useState<FormData>({
    description: '',
    groupId: ''
  })

  useEffect(() => {
    setFormData({
      ...formData,
      groupId: selectedGroupID
    })
  }, [selectedGroupID])

  const handlePopup = (groupId: string) => {
    setVisiblePopup(true)
    setSelectedGroupID(groupId)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    // Keep the console here to trigger the groupID for now.
    // ...
    console.log('Selected Group ID', selectedGroupID, e)
    
    // close after asynchronous form submission
    wait().then(() => setVisiblePopup(false))
    e.preventDefault()

    // Call the API with the groupID and the content.
    // ...
    console.log('Form Data', formData)
  }

  return (
    <main className="flex flex-row gap-6">
      {groups.map((group) => (
        <GroupCard key={group.id} group={group} handlePopup={handlePopup} />
      ))}
      {/* IF We need to display some more popups here. Then, It would be good if we make it as reusuable component. For now, Just add it here directly.  */}
      <Dialog.Root
        open={visiblePopup}
        onOpenChange={() => setVisiblePopup(!visiblePopup)}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="dialog-overlay" />
          <Dialog.Content className="dialog-content bg-dark-base-300">
            <Dialog.Title className="dialog-title text-dark-secondary-content">
              Join Group
            </Dialog.Title>
            <Dialog.Description className="dialog-description">
              Why should we accept you to the group?
            </Dialog.Description>
            <form onSubmit={handleSubmit}>
              <fieldset className="dialog-fieldset">
                <input
                  className="dialog-input"
                  name="description"
                  defaultValue={''}
                  onChange={handleChange}
                  required
                />
              </fieldset>
              <div className="dialog-btn-container">
                <button
                  type="submit"
                  className="cursor-pointer rounded-md bg-dark-primary px-4 py-2 text-sm font-semibold text-white opacity-100 shadow-sm hover:opacity-75"
                >
                  Submit
                </button>
              </div>
            </form>
            <Dialog.Close asChild>
              <button
                className="dialog-close-btn cursor-pointer"
                aria-label="Close"
              >
                <Cross2Icon className="color-white" />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </main>
  )
}
