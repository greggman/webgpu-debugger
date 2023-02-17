import React, { useState, useRef, useEffect, useCallback } from 'react';

import './DualRange.css';

interface Props {
    label: string;
    min?: number;
    max: number;
    minValue?: number;
    maxValue?: number;
    step?: number;
    valueFormatFn?: (min: number, max: number) => string;
    onChange: (min: number, max: number) => void;
}

const defaultFormat = (minV: number, maxV: number) => `${minV.toString()} - ${maxV.toString()}`;

export default function DualRange({
    label,
    min = 0,
    max,
    step = 1,
    minValue,
    maxValue,
    valueFormatFn = defaultFormat,
    onChange,
}: Props) {
    const [minVal, setMinVal] = useState(minValue ?? min);
    const [maxVal, setMaxVal] = useState(maxValue ?? max);

    const minValRef = useRef<HTMLInputElement>(null);
    const maxValRef = useRef<HTMLInputElement>(null);

    const range = useRef<HTMLDivElement>(null);

    const percent = useCallback(
        (v: number): number => {
            return Math.round(((v - min) / (max - min)) * 100);
        },
        [min, max]
    );

    useEffect(() => {
        if (maxValRef.current) {
            const minPercent = percent(minVal);
            const maxPercent = percent(+maxValRef.current.value);

            if (range.current) {
                range.current.style.left = `${minPercent}%`;
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [min, minVal, percent]);

    useEffect(() => {
        if (minValRef.current) {
            const minPercent = percent(+minValRef.current.value);
            const maxPercent = percent(maxVal);

            if (range.current) {
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [max, maxVal, percent]);

    useEffect(() => {
        onChange(minVal, maxVal);
    }, [min, max, minVal, maxVal, onChange]);

    useEffect(() => {
        // Clamp the min and max values to the update range.
        setMinVal(v => Math.min(max, Math.max(v, min)));
        setMaxVal(v => Math.min(max, Math.max(v, min)));
    }, [min, max, onChange]);

    return (
        <label className={'wgdb-dualrange'}>
            <div>{label}</div>
            <div className={'wgdb-dualrange-container'}>
                <input
                    ref={minValRef}
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={minVal}
                    onChange={e => setMinVal(Math.min(parseFloat(e.target.value), maxVal - step))}
                    className={minVal > min ? 'wgdb-dualrange-thumb .wgdb-raised-thumb' : 'wgdb-dualrange-thumb'}
                />
                <input
                    ref={maxValRef}
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={maxVal}
                    onChange={e => setMaxVal(Math.max(parseFloat(e.target.value), minVal + step))}
                    className={maxVal < max ? 'wgdb-dualrange-thumb wgdb-raised-thumb' : 'wgdb-dualrange-thumb'}
                />
                <div className="wgdb-dualrange-track" />
                <div ref={range} className="wgdb-dualrange-range" />
            </div>
            <div>{valueFormatFn(minVal, maxVal)}</div>
        </label>
    );
}
