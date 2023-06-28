import { useEffect } from "react";
import { keys, lowerCase } from "lodash";
import { initTE } from "tw-elements";

const useInitTE = (modules: { [key: string]: any }, ref: any, config?: any) => {
	const canvasList = ['chart']
	const isCanvas = (moduleKey: string) => canvasList.some(canvas => lowerCase(moduleKey) === lowerCase(canvas))
	useEffect(() => {
		const refKeys = keys(modules)
		
		let elements: any = {}
		refKeys.forEach(key => {
			const Module = modules[key]
			const NewModule = new Module(ref.current, config)
			elements = { ...elements, [key]: NewModule }
		})

		const shouldInit = refKeys.every(key => !elements[key])
		shouldInit && initTE(elements)

		return () => {
			refKeys.forEach(key => {
				const element = elements[key]
				if (element && !shouldInit && isCanvas(key)) {
					element?.destroy()
				}
			})
		}
	}, []);
}

export default useInitTE