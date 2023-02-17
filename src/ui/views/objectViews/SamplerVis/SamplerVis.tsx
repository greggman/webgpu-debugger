import React from 'react';
import { ReplaySampler } from '../../../../replay';
import { JsonValueObject } from '../../../components/JsonValue/JsonValue';

export default function SamplerVis({ data }: { data: ReplaySampler }) {
    return (
        <div className="wgdb-vis">
            <JsonValueObject data={data} />
        </div>
    );
}
