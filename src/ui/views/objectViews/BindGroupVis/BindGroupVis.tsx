import React from 'react';
import { ReplayBindGroup } from '../../../../replay';
import { JsonValueObject } from '../../../components/JsonValue/JsonValue';

export default function BindGroupVis({ data }: { data: ReplayBindGroup }) {
    return (
        <div className="wgdb-vis">
            <JsonValueObject data={data} />
        </div>
    );
}
