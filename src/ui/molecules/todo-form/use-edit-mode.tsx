import { useState } from 'react'

export const useEditMode = (
	initialValue: boolean = false
): [boolean, () => void] => {
	const [editMode, setEditMode] = useState<boolean>(initialValue)
	const toggleEditMode = () => setEditMode(!editMode)
	return [editMode, toggleEditMode]
}
